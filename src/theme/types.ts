import {StylePreset, TypePreset} from './presets/types';
import {DeepPartial} from '../utils/types';
import {colors} from './primitives';

export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg', number>;
export enum Devices {
  iPad = 'iPad',
  iPadPro = 'iPad Pro',
}

export interface ThemeBase {
  // primitives
  animations: Record<string, string>;
  borders: Record<string, string>;
  breakpoints: Breakpoints;
  colors: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fonts: Record<string, any>;
  overlays: Record<string, string>;
  shadows: Record<string, string>;
  sizing: Record<string, string>;

  // presets
  spacePresets: Record<string, string>;
  stylePresets: Record<string, StylePreset>;
  typePresets: Record<string, TypePreset>;

  // defaults
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDefaults: Record<string, any>;
  icons: Record<string, React.ComponentType>;
}

export type ThemeOverrides = DeepPartial<ThemeBase>;

interface ThemeIdentifier {
  themeVersion: 1;
  name: string;
}

export interface UncompiledTheme extends ThemeBase, ThemeIdentifier {
  compiled?: false;
}

export interface Theme extends ThemeBase, ThemeIdentifier {
  compiled: true;
}

export type AnimationKeys = string;
export type BorderKeys = string;
export type BorderRadiusKeys = string;
export type BreakpointKeys = keyof Breakpoints;
export type ColorKeys = string;
export type IconSizeKeys = string;
export type SizingKeys = string;
export type StylePresetKeys = string;
export type TypePresetKeys = string;
export type SpacePresetKeys = string;
export type PaddingPresetKeys = string;
export type ShadowKeys = string;
export type GridKeys = string;
export type FontPrimitivesKeys = string;
export type FontSizeKeys = string;
export type LineHeightKeys = string;
export type Colors = typeof colors;

export * from './presets/types';