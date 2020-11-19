import {SvgProps} from '../icons';
import {MQ} from '../utils/style';

export interface UnorderedListProps {
  listItemMarker?: React.ComponentType<SvgProps>;
  overrides?: {
    spaceStack?: MQ<string>;
    content?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
    marker?: {
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>;
      size?: string;
    };
  };
}