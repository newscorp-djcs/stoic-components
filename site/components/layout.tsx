import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {
  Grid,
  getMediaQueryFromTheme,
  Cell,
  styled,
  getSpacingCssFromTheme,
  getColorCssFromTheme,
} from 'newskit';

import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import Sidebar from './sidebar';
import SectionNavigation from './section-navigation';
import markdownElements from './markdown-elements';
import {Playground} from './playground';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Container = styled.div<Pick<LayoutProps, 'hideSidebar'>>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${getSpacingCssFromTheme('paddingTop', 'space090')};
  ${getMediaQueryFromTheme('lg')} {
    padding-left: ${({hideSidebar}) => !hideSidebar && '276px'};
    ${getSpacingCssFromTheme('paddingTop', 'space100')};
  }
`;

const BodyWrapper = styled.main`
  flex: 1 0 auto;
  ${getColorCssFromTheme('backgroundColor', 'interfaceBackground')};
  ${getSpacingCssFromTheme('paddingTop', 'space030')};
`;

export interface LayoutProps {
  path: string;
  newPage?: boolean; // Temporary property until "new" pages are the only pages.
  toggleTheme: () => void;
  themeMode: string;
  hideSidebar?: boolean;
}
interface LayoutState {
  sidebarOpen: boolean;
  headerHeight: number;
  sectionNavHeight: number;
}

interface Heading {
  children: React.ReactNode;
}

type PageSection = React.ReactElement<{
  children: React.ReactNode;
  mdxType: string;
}>[];

const WrapperWithPadding = styled.div`
  ${getSpacingCssFromTheme('paddingTop', 'space060')};
  ${getSpacingCssFromTheme('paddingBottom', 'space060')};
`;

class Layout extends React.Component<LayoutProps, LayoutState> {
  private headerRef: React.RefObject<HTMLElement>;

  private sectionNavRef: React.RefObject<HTMLElement>;

  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      sidebarOpen: false,
      headerHeight: 0,
      sectionNavHeight: 0,
    };

    this.headerRef = React.createRef<HTMLElement>();
    this.sectionNavRef = React.createRef<HTMLElement>();
  }

  componentDidMount() {
    const headerNode = this.headerRef.current;
    const sectionNavNode = this.sectionNavRef.current;

    if (headerNode) {
      this.setState({headerHeight: headerNode.clientHeight});
    }
    if (sectionNavNode) {
      this.setState({sectionNavHeight: sectionNavNode.clientHeight});
    }
  }

  toggleSidebar = () => {
    this.setState(({sidebarOpen}) => ({sidebarOpen: !sidebarOpen}));
  };

  renderNavigation = () => {
    const DEFAULT_SECTIONS = [/Overview/, /Props/, /Playground/, /Rationale/];
    const {path, children} = this.props;

    if (!path.startsWith('/components')) return null;

    const pageSections = this.getPageSections(children as PageSection);
    const filteredSections: string[] = pageSections.filter((section: string) =>
      DEFAULT_SECTIONS.some(def => def.test(section)),
    );

    return (
      <SectionNavigation sections={filteredSections} ref={this.sectionNavRef} />
    );
  };

  getPageSections = (children: PageSection): string[] => {
    const sections: string[] = [];

    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.props.mdxType === 'h2') {
        sections.push(child.props.children as string);
      }
    });
    return sections;
  };

  updatePropsForMarkdownElements = () => {
    const {headerHeight, sectionNavHeight} = this.state;

    const H2 = markdownElements.h2;
    const updatedComponents = {
      ...markdownElements,
      h2: ({children}: Heading) => (
        <H2 offset={sectionNavHeight + headerHeight}>{children}</H2>
      ),
    };

    return updatedComponents;
  };

  render() {
    const {sidebarOpen} = this.state;
    const {
      hideSidebar,
      path,
      newPage,
      toggleTheme,
      themeMode,
      children,
    } = this.props;

    return (
      <LayoutWrapper>
        {!hideSidebar && (
          <Sidebar
            path={path}
            sidebarOpen={sidebarOpen}
            handleSidebarClick={this.toggleSidebar}
          />
        )}
        <SiteHeader
          handleSidebarClick={this.toggleSidebar}
          toggleTheme={toggleTheme}
          themeMode={themeMode}
          ref={this.headerRef}
          data-test-id="siteHeader"
        />
        <Container hideSidebar={hideSidebar}>
          {/* This is a hack to fix stalling builds from NextJS trying to optimise the page, it won't render anything */}
          <Playground componentName={false} />

          <BodyWrapper>
            {path.endsWith('-new') || newPage ? (
              children
            ) : (
              <Grid>
                <Cell xs={12} lg={10} lgOffset={1}>
                  <WrapperWithPadding>
                    {this.renderNavigation()}
                    <MDXProvider
                      components={this.updatePropsForMarkdownElements()}
                    >
                      {children}
                    </MDXProvider>
                  </WrapperWithPadding>
                </Cell>
              </Grid>
            )}
          </BodyWrapper>

          <SiteFooter />
        </Container>
      </LayoutWrapper>
    );
  }
}

export default Layout;
