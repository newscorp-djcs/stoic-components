import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg, SvgLabels} from './svg';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface SkipPreviousIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<SkipPreviousIconProps> = ({
  $size,
  $color,
  title = 'SkipPrevious icon',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export const SkipPrevious = withTheme<SkipPreviousIconProps>(props => {
  const Icon = props.theme.icons.SkipPrevious || defaultIcon;

  return <Icon {...props} />;
});
