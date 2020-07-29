import {SizingKeys} from '../themes';
import {SpacingPresetKeys} from '../themes/mappers/spacing';

export interface BylineData {
  author: string;
  href?: string;
  title?: string;
  location?: string;
  ariaLabel?: string;
}

export interface BylineProps {
  bylineData: BylineData[];
  overrides?: {
    stylePreset?: string;
    typePreset?: string;
    space?: SizingKeys;
    link?: {
      stylePreset?: string;
      typePreset?: string;
    };
    divider?: {
      stylePreset?: string;
      spaceInline?: SpacingPresetKeys;
    };
  };
}