import {TabSize} from '../tab';
import {MQ} from '../utils/style';

export interface TabGroupProps {
  size?: TabSize;
  children: Array<React.ReactElement>;
  divider?: boolean;
  tabPanes?: Array<React.ReactElement>;
  vertical?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    tabBarTrack?: {
      weight?: string;
    };
    tabBarIndicator?: {
      length?: string;
      weight?: string;
      motionDuration?: string;
      motionTiming?: string;
    };
  };
}

export interface TabPaneProps {
  children: React.ReactNode;
  selected?: boolean;
  tabKey?: number;
}
