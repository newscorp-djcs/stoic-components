import React, {useState} from 'react';
import {styled} from '../utils/style';
import {Placeholder} from '../icons';
import {
  getStylePresetFromTheme,
  GetStylePresetFromThemeOptions,
} from '../utils/style-preset';

export enum ImageShape {
  Square = 'square',
  Rounded = 'rounded',
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectHeight: number | string;
  aspectWidth: number | string;
  hideLoadingIcon?: boolean;
  shape?: ImageShape;
  stylePreset?: string;
}

interface ImageContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isLoading: boolean;
  aspectHeight: number | string;
  aspectWidth: number | string;
  shape?: ImageShape;
  stylePreset?: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  height: ${props => (props.isLoading ? 0 : 'auto')};
  padding-top: ${props =>
    props.isLoading
      ? `calc(100% * (${props.aspectHeight}/${props.aspectWidth}))`
      : 0};

  ${({stylePreset}) => {
    const options = {
      borderRadiusSize: 'sizing000',
    } as GetStylePresetFromThemeOptions;

    const presetName =
      stylePreset && getStylePresetFromTheme(stylePreset, undefined, options)
        ? stylePreset
        : 'static010';

    return getStylePresetFromTheme(presetName, 'stylePreset', options);
  }}
`;

const imagePropsAreEqual = (prevProps: ImageProps, nextProps: ImageProps) =>
  prevProps.aspectHeight === nextProps.aspectHeight &&
  prevProps.aspectWidth === nextProps.aspectWidth &&
  prevProps.hideLoadingIcon === nextProps.hideLoadingIcon &&
  prevProps.shape === nextProps.shape &&
  prevProps.src === nextProps.src;

const ImageComponent = (props: ImageProps) => {
  const {hideLoadingIcon} = props;
  const [isLoading, setIsLoading] = useState(true);

  const DisplayImage = styled.img`
    display: ${isLoading ? 'none' : 'block'};
    width: 100%;
    height: auto;
    animation: fadeIn 300ms;
    border-radius: inherit;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  const IconContainer = styled.div<{stylePreset?: string}>`
    top: 0;
    left: 0;
    position: absolute;
    display: ${isLoading && !hideLoadingIcon ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    ${({stylePreset}) => {
      const options = {
        omitStyles: ['backgroundColor', 'borderRadius'],
      } as GetStylePresetFromThemeOptions;

      const presetName =
        stylePreset && getStylePresetFromTheme(stylePreset, undefined, options)
          ? stylePreset
          : 'static010';

      return getStylePresetFromTheme(presetName, 'stylePreset', options);
    }}
  `;

  const InnerIconContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <ImageContainer {...props} isLoading={isLoading}>
      <IconContainer>
        <InnerIconContainer>
          <Placeholder $size="iconSize040" />
        </InnerIconContainer>
      </IconContainer>
      <DisplayImage
        {...props}
        onLoad={() => isLoading && setIsLoading(false)}
      />
    </ImageContainer>
  );
};

export const Image = React.memo(ImageComponent, imagePropsAreEqual);
