import React from 'react';
import {
  styled,
  getTypographyPreset,
  MQ,
  getSpacingInlineHorizontal,
  getStylePreset,
} from '../utils/style';

export interface HeadlineProps {
  kickerText?: string;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  kickerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    kicker?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      spaceInline?: MQ<string>;
    };
    heading?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  };
}

interface RenderAsProps {
  as?: React.ElementType;
}

const HeadlineContainer = styled.section`
  display: block;
`;

const Heading = styled.h1<RenderAsProps & HeadlineProps>`
  display: inline-block;
  margin: 0;
  ${getTypographyPreset('headline.heading', 'heading', {
    withCrop: true,
  })}
  ${getStylePreset('headline.heading', 'heading')}
`;

const Kicker = styled.span<RenderAsProps & HeadlineProps>`
  display: inline-block;
  margin: 0;
  ${getTypographyPreset('headline.kicker', 'kicker', {
    withCrop: true,
  })}
  ${getStylePreset('headline.kicker', 'kicker')}
  ${getSpacingInlineHorizontal('headline.kicker', 'kicker')};
  text-transform: uppercase;
`;

export const Headline: React.FC<HeadlineProps> = ({
  children,
  kickerText,
  headingAs = 'h1',
  kickerAs = 'span',
  overrides = {},
}) =>
  kickerText ? (
    <HeadlineContainer>
      <Kicker as={kickerAs} overrides={overrides}>
        {kickerText}{' '}
      </Kicker>
      <Heading as={headingAs} overrides={overrides}>
        {children}
      </Heading>
    </HeadlineContainer>
  ) : (
    <Heading as={headingAs} overrides={overrides}>
      {children}
    </Heading>
  );
