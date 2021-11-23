import React, {useEffect} from 'react';
import {
  newskitLightTheme,
  InlineMessage,
  Block,
  P,
  UnorderedList,
} from 'newskit';

import {Table} from '../../components/table';
import {CommonSection, UsageSection} from '../../templates/template-sections';
import {MediaList} from '../../components/media-list';
import {IconFilledCircle} from '../../components/icons';

import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {ComponentPageCellCompact} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {Link} from '../../components/link';
import {getTokenType} from '../../utils/get-token-type';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import useMediaQuery from '../../helpers/use-media-query';

const TOKENS_DESCRIPTION: {[key in string]: string} = {
  motionTimingLinear: 'Has the same even speed from start to end.',
  motionTimingEaseIn:
    'Curves accelerate; useful for animations where an object permanently exits the screen e.g. a drawer being dismissed',
  motionTimingEaseOut:
    'Curves decelerate; they work well for objects which appear from off of the screen e.g. a Drawer entering the screen',
  motionTimingEaseInAndOut:
    'Curves initially accelerate and then decelerate. They’re the default easing for animations and work in variety of cases, especially for objects that can move frequently from place to place on the screen e.g. an item with an drag-and-drop list.',
  motionDuration010: 'Sliders, Progress Indicators',
  motionDuration020: 'Text Inputs',
  motionDuration030: 'Buttons, tags, checkboxes, switches, menu items',
  motionDuration040: 'Modals, drawers, toasts, banners',
  motionDuration050: 'Nav bars',
};

const featureCardOverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardOverrides;

const PRINCIPLE_CARDS = [
  {
    media: {
      src: 'static/theming/foundations/purposeful.svg',
      alt: '',
    },
    title: 'Purposeful',
    description:
      'Motion should help draw attention to important details and emphasise key points in a user journey without creating unnecessary distractions.',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/seamless.svg',
      alt: '',
    },
    title: 'Seamless',
    description: `Motion should add to a brand's character and the way it expresses itself to users.`,
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/instinctive.svg',
      alt: '',
    },
    title: 'Instinctive',
    description: `Motion should mimic the feel of real-world physics, to give motion a natural and discernible feeling.`,
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
];

const DO_AND_DONT = [
  {
    description: `Motion should simply and effectively highlight important details and emphasise key points in a user journey.`,
    kind: UsageKind.DO,
    media: getIllustrationComponent('foundations/motions/do-01'),
  },
  {
    description: `Motion should not distract or block the user from what they are doing, or take so long that a user feels like they’re waiting on it to complete before they can finish what they are doing.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('foundations/motions/dont-01'),
  },
  {
    description: `Avoid motion that is too fast for users to follow.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('foundations/motions/dont-02'),
  },
  {
    description: `Avoid motion that is overly slow, preventing a user from advancing in their user journey.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('foundations/motions/dont-03'),
  },
];

const motionDurationRows = getTokenType(
  newskitLightTheme.motions,
  'motionDuration',
).map(({tokenName, tokenValue}) => ({
  duration: tokenValue,
  token: tokenName,
  tokenValue,
  commonUses: TOKENS_DESCRIPTION[tokenName] || '-',
}));
const motionTimingRows = getTokenType(
  newskitLightTheme.motions,
  'motionTiming',
).map(({tokenName, tokenValue}) => ({
  timing: tokenValue,
  token: tokenName,
  tokenValue,
  commonUses: TOKENS_DESCRIPTION[tokenName] || '-',
}));

const CellWrapper = ({children}: {children: React.ReactNode}) => (
  <ComponentPageCellCompact>{children}</ComponentPageCellCompact>
);

const ReduceMotionMessage = () => {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [hasReducedMotion, setReducedMotion] = React.useState(false);
  useEffect(() => {
    setReducedMotion(reduceMotion);
  }, [reduceMotion, setReducedMotion]);

  return hasReducedMotion ? (
    <Block spaceStack="space060">
      <InlineMessage>
        We&apos;ve identified that you have a reduced motion setting turned on
        in your system preferences (or settings). This page contains animated
        motion examples that won&apos;t be displayed. To view the motion, turn
        off the reduced motion settings in your device.
      </InlineMessage>
    </Block>
  ) : null;
};

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Motions | Newskit design system',
      description: 'Motions',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundation',
      name: 'Motions',
      hero: {
        illustration: 'foundations/motions/hero',
      },
      introduction: `Motion is used to create movement and narrative within a product. Animated interface elements don't just attract attention, they enhance user experience and help guide user flow: They reveal the functionality and process of a user interface by communicating where to focus and what to do next.
`,
    }}
    featureCard={{
      title: 'Overlays',
      description: 'Overlays are used for styling UI elements.',
      href: '/foundations/overlays',
    }}
  >
    <CommonSection
      title="Overview"
      id="overview"
      toc="Overview"
      introduction="Motion foundations are utilised by animations and transitions."
    >
      <CellWrapper>
        <InlineMessage role="region" aria-label="Overview">
          <Link
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/3446341702"
            target="_blank"
          >
            Learn more about how Motion foundations are applied to animations
            and transitions via Motion Presets.
          </Link>
        </InlineMessage>
        <Block spaceStack="space060" />
        <InlineMessage
          role="region"
          title="Overrides"
          aria-label="Default Motion in the foundations can be overridden."
        >
          <Link href="/foundations/theming/creating-a-theme">
            Learn more about overriding default Motion in the theme.
          </Link>
        </InlineMessage>
      </CellWrapper>
    </CommonSection>

    <CommonSection
      title="Principles"
      id="principles"
      toc="Principles"
      introduction=""
    >
      <MediaList
        layout="3-span"
        cardType="feature"
        cards={PRINCIPLE_CARDS}
        parentCellProps={{md: 10, lg: 10, xl: 8, mdOffset: 1}}
      />
    </CommonSection>

    <CommonSection
      title="Duration"
      toc="Duration"
      id="duration"
      introduction="Determining which timing to use is a matter of context, including the complexity of the action and the distance over which the animation occurser which the animation occurs."
    >
      <CellWrapper>
        <ReduceMotionMessage />
        <Table
          columns={['Duration', 'Token', 'Token value', 'Common uses']}
          rows={motionDurationRows}
        />
        <Block spaceStack="space060" />
        <InlineMessage role="region" aria-label="Duration">
          These should use the{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration">
            animation-duration
          </Link>{' '}
          css property.
        </InlineMessage>
      </CellWrapper>
    </CommonSection>

    <CommonSection
      title="Timing"
      toc="Timing"
      id="timing"
      introduction="Timing controls the velocity of motion over its duration. It helps determine an animation’s feeling and can aid in matching the appearance of real-world physics by controlling how objects accelerate and decelerate as they move on the screen. NewsKit uses four different types of timing."
    >
      <CellWrapper>
        <ReduceMotionMessage />
        <Table
          columns={['Timing', 'Token', 'Token value', 'Common uses']}
          rows={motionTimingRows}
        />
        <Block spaceStack="space060" />
        <InlineMessage role="region" aria-label="Timing">
          These should use the{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function">
            animation-timing-function
          </Link>{' '}
          css property the foundations.
        </InlineMessage>
      </CellWrapper>
    </CommonSection>
    <UsageSection
      introduction="The following guidance describes how and when to appropriately use motion."
      cards={DO_AND_DONT}
    />
    <CommonSection
      title="Accessibility considerations"
      id="a11y"
      toc="Accessibility"
      introduction=""
    >
      <CellWrapper>
        <Block spaceStack="space060">
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            When creating custom animations using the motion foundations, the
            following should be considered to help ensure the quality and
            usability of your implementation:
          </P>
        </Block>
        <UnorderedList listItemMarker={IconFilledCircle} markerAlign="start">
          <Block spaceStack="space060">
            <P overrides={{typographyPreset: 'editorialParagraph030'}}>
              If motion plays an extensive role in your product’s experience,
              offer an option to reduce motion to improve usability for people
              who could be adversely affected by motion on screens.
            </P>
          </Block>
          <Block spaceStack="space060">
            <P overrides={{typographyPreset: 'editorialParagraph030'}}>
              Always consider the needs of people who are sensitive to motion.
              Consider avoiding large, abrupt movements, or moving multiple
              objects at the same time in different directions.
            </P>
          </Block>
        </UnorderedList>
        <Link
          overrides={{typographyPreset: 'editorialParagraph030'}}
          href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/3446341702/Motion+Presets+-+Web+Documentation#Reduced-Motion-For-Motion-Sensitivities"
        >
          Learn more about accessibility considerations for Motion
        </Link>
      </CellWrapper>
    </CommonSection>
  </FoundationPageTemplate>
);
