import * as React from 'react';
import {Headline} from '..';

export const name = 'headline';

export const component = () => (
  <React.Fragment>
    <Headline>Only headline text with not kicker</Headline>
    <br />
    <br />
    <Headline kickerText="Kicker">Headline text</Headline>
    <br />
    <Headline kickerText="Kicker as h5" headingAs="h4" kickerAs="h5">
      Headline as h4
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