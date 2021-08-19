import * as React from 'react';
import {Headline} from '..';

export default {
  title: 'NewsKit Light/headline',
  component: () => 'None',
};

export const StoryHeadline = () => (
  <React.Fragment>
    <Headline>Headline text with no kicker</Headline>
    <br />
    <br />
    <Headline kickerText="Kicker">Headline text</Headline>
    <br />
    <Headline kickerText="Kicker as h2" headingAs="h3" kickerAs="h2">
      Headline as h3
    </Headline>
    <br />
    <Headline
      kickerText="Kicker overwritten preset"
      overrides={{
        kicker: {
          stylePreset: 'tagPrimary',
        },
        heading: {
          stylePreset: 'linkInline',
        },
      }}
    >
      Headline overwritten preset
    </Headline>
    <br />
    <Headline
      kickerText="Kicker custom mq margin preset"
      overrides={{
        kicker: {
          spaceInline: {
            xs: 'space080',
            md: 'space040',
          },
        },
      }}
    >
      Heading Headline
    </Headline>
  </React.Fragment>
);
StoryHeadline.storyName = 'headline';
