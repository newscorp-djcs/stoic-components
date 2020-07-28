import {TypePresetKeys, IconSizeKeys, SizingKeys} from '../themes';
import {StylePresetKeys} from '../themes/mappers/style-preset';
import {MQ} from '../utils/style';
import {EventContext} from '../instrumentation/types';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // href is optional on AnchorHTMLAttributes, here we make it required.
  href: string;
  eventContext?: EventContext;
  external?: boolean;
  noUnderline?: boolean;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    typePreset?: MQ<TypePresetKeys>;
    space?: SizingKeys;
    externalIcon?: {
      size?: IconSizeKeys;
    };
  };
}
