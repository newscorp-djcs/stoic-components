import * as React from 'react';
import {TabInternal as Tab} from '../tab-internal';
import {TabSize} from '../types';
import {styled, getSizingFromTheme} from '../../utils/style';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {IconFilledPause, IconFilledEmail, IconFilledLink} from '../../icons';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {getSSRId} from '../../utils/get-ssr-id';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing050')};
`;

const tabSizes: Array<{
  tabSize: TabSize;
}> = [
  {tabSize: TabSize.Small},
  {tabSize: TabSize.Medium},
  {tabSize: TabSize.Large},
];

const Label = styled.div`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: attr(data-state);
    margin-right: 48px;
  }

  ${getMediaQueryFromTheme('xs')} {
    &::before {
      content: none;
    }
  }
`;

const myCustomTheme = createTheme({
  name: 'my-custom-tab-theme',
  overrides: {
    stylePresets: {
      tabCustom: {
        selected: {
          borderStyle: 'solid',
          borderColor: '#0a68c1',
        },
      },
    },
  },
});

const states = ['Default', 'Selected', 'Disabled', 'Focus'];

export default {
  name: 'tab',
  children: [
    {
      name: 'tab-size',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Size</StorybookHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="space070"
              spaceInline="space070"
              wrap="wrap"
              role="tablist"
            >
              <Tab size={TabSize.Small} ariaLabel="small tab">
                Small tab
              </Tab>
              <Tab size={TabSize.Medium} ariaLabel="medium tab">
                Medium tab
              </Tab>
              <Tab size={TabSize.Large} ariaLabel="large tab">
                Large tab
              </Tab>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-states',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab States</StorybookHeading>
          <Grid>
            <Cell xs={6} sm={3}>
              <Stack>
                <StorybookSubHeading>State</StorybookSubHeading>
                {states.map(state => (
                  <Label key={getSSRId()}>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {
              <Cell xs={6} sm={3}>
                <Stack
                  spaceInline="space020"
                  stackDistribution={StackDistribution.SpaceEvenly}
                  role="tablist"
                >
                  <StorybookSubHeading>Tab</StorybookSubHeading>
                  <Block role="tablist" data-state="Default">
                    <Tab ariaLabel="tab label" overrides={{stylePreset: 'tab'}}>
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Selected" role="tablist">
                    <Tab
                      ariaLabel="tab label"
                      selected
                      overrides={{stylePreset: 'tab'}}
                    >
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Disabled">
                    <Tab
                      disabled
                      ariaLabel="tab label"
                      overrides={{stylePreset: 'tab'}}
                    >
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Focus">
                    <Tab
                      autoFocus
                      ariaLabel="tab label"
                      overrides={{stylePreset: 'tab'}}
                    >
                      Tab Label
                    </Tab>
                  </Block>
                </Stack>
              </Cell>
            }
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-icon',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab - Icon</StorybookHeading>
          <Container>
            {[Pause, Email, IconFilledLink].map(IconType => (
              <Spacer key={getSSRId()}>
                <Stack
                  flow="horizontal-center"
                  spaceInline="space060"
                  role="tablist"
                >
                  {tabSizes.map(tab => (
                    <Tab
                      key={getSSRId()}
                      size={tab.tabSize}
                      ariaLabel="icon tab"
                    >
                      <IconType />
                    </Tab>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-icon & label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab - Icon and Label</StorybookHeading>
          <Container>
            {[Pause, Email, IconFilledLink].map(IconType => (
              <Spacer key={getSSRId()}>
                <Stack
                  flow="horizontal-center"
                  spaceInline="space060"
                  role="tablist"
                >
                  {tabSizes.map(tab => (
                    <Tab
                      key={getSSRId()}
                      size={tab.tabSize}
                      ariaLabel="tab label"
                    >
                      <IconType />
                      Tab Label
                    </Tab>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab With Overrides</StorybookHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Stack
                flow="horizontal-center"
                spaceInline="space060"
                role="tablist"
              >
                <Tab
                  selected
                  ariaLabel="tab label"
                  overrides={{
                    stylePreset: 'tabCustom',
                    typographyPreset: 'utilityLabel030',
                    spaceInline: 'space030',
                  }}
                >
                  <IconFilledEmail />
                  Tab Label
                  <IconFilledEmail overrides={{size: 'iconSize040'}} />
                </Tab>
              </Stack>
            </ThemeProvider>
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-with-icon-size-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>
            Tab With default IconSize and inline overridden icon size
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Stack
                role="tablist"
                flow="horizontal-center"
                spaceInline="space060"
              >
                <Tab selected ariaLabel="tab label">
                  <IconFilledEmail />
                  Tab Label
                  <IconFilledEmail overrides={{size: 'iconSize040'}} />
                </Tab>
              </Stack>
            </ThemeProvider>
          </Container>
          <StorybookSubHeading>
            Tab With overrides for IconSize and inline overridden icon size
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Stack
                role="tablist"
                flow="horizontal-center"
                spaceInline="space060"
              >
                <Tab
                  selected
                  ariaLabel="tab label"
                  overrides={{
                    iconSize: 'iconSize030',
                  }}
                >
                  <IconFilledEmail />
                  Tab Label
                  <IconFilledEmail overrides={{size: 'iconSize040'}} />
                </Tab>
              </Stack>
            </ThemeProvider>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};