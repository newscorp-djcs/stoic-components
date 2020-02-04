import {ThemeProp, css, CSSObject} from './style';
import {
  StylePresetStyles,
  StylePresetStyleKeys,
  StylePresetStateKeys,
} from '../themes/mappers/style-preset';
import {filterObject, rejectObject} from './filter-object';
import {SizingKeys} from '../themes/newskit-light/spacing';

export interface GetStylePresetFromThemeOptions {
  isLoading?: boolean;
  isCurrent?: boolean;
  isDisabled?: boolean;
  omitStates?: StylePresetStateKeys[];
  filterStates?: StylePresetStateKeys[];
  omitStyles?: StylePresetStyleKeys[];
  filterStyles?: StylePresetStyleKeys[];
  borderRadiusSize?: SizingKeys;
}
const getPresetStyles = (
  presetStyles: StylePresetStyles,
  options?: GetStylePresetFromThemeOptions,
) => {
  const {filterStyles = null, omitStyles = [], borderRadiusSize = undefined} =
    options || {};
  const {borderRadius: borderRadiusSizing, ...styles} = filterStyles
    ? filterObject(presetStyles, filterStyles)
    : rejectObject(presetStyles, omitStyles);
  const borderRadius =
    borderRadiusSizing && borderRadiusSize
      ? borderRadiusSizing[borderRadiusSize]
      : '';
  return {
    ...styles,
    borderRadius,
  };
};
const cssTmpl = (
  {iconColor = '', ...cssObject}: ReturnType<typeof getPresetStyles>,
  selector: string = '',
) => css`
  ${selector && `:${selector} {`}
  ${cssObject as CSSObject}
  ${iconColor &&
    `
    svg {
      fill: ${iconColor};
      color: ${iconColor};
    }
  `}
  ${selector && '}'}
`;
export const getStylePresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: string,
  customProp?: Exclude<keyof Props, 'theme'>,
  options?: GetStylePresetFromThemeOptions,
) => ({theme, ...props}: Props) => {
  const {
    omitStates = [],
    filterStates = [],
    isCurrent = false,
    isLoading = false,
    isDisabled = false,
  } = options || {};
  const stylePreset =
    (customProp &&
      theme.stylePresets[(props[customProp] as unknown) as string]) ||
    (defaultToken && theme.stylePresets[defaultToken]);
  if (!stylePreset) {
    return '';
  }
  const {current, loading, ...presetStates} =
    filterStates && filterStates.length
      ? filterObject(stylePreset, filterStates)
      : rejectObject(stylePreset, omitStates);
  const stateOverrides =
    (isDisabled && presetStates.disabled) ||
    (isLoading && loading) ||
    (isCurrent && current) ||
    undefined;
  if (stateOverrides) {
    const {base = {}} = presetStates;
    return cssTmpl(getPresetStyles({...base, ...stateOverrides}, options));
  }
  return Object.entries(presetStates).map(([stateKey, presetState]) => {
    if (presetState) {
      const presetStyle = getPresetStyles(presetState, options);
      if (stateKey === 'base') {
        return cssTmpl(presetStyle);
      }
      const selector =
        stateKey === 'disabled' ? stateKey : `${stateKey}:not(:disabled)`;
      return cssTmpl(presetStyle, selector);
    }
    return '';
  });
};
