import {css, styled, CSSObject} from '../utils/style';

import {
  Flow,
  ChildProps,
  StyledChildProps,
  StackDistribution,
  StyledStackProps,
} from './types';
import {SizingKeys, Theme} from '../themes';
import {ThemeProp} from '../utils/style-types';

export const flowDictionary = {
  vertical: 'column',
  horizontal: 'row',
};

export const alignmentDictionary = {
  'vertical-left': 'flex-start',
  'vertical-center': 'center',
  'vertical-right': 'flex-end',
  'horizontal-top': 'flex-start',
  'horizontal-center': 'center',
  'horizontal-bottom': 'flex-end',
};

const horizontalFlows = [
  Flow.HorizontalBottom,
  Flow.HorizontalCenter,
  Flow.HorizontalTop,
];

const verticalFlows = [
  Flow.VerticalLeft,
  Flow.VerticalCenter,
  Flow.VerticalRight,
];

export const hasSpacing = (theme: Theme, space: SizingKeys) =>
  parseInt(theme.sizing[space], 10) !== 0;

const calculateMargins = (negative?: boolean) => ({
  theme,
  space,
  $wrap,
  flow,
}: ChildProps & ThemeProp) => {
  const hasWrapping = $wrap === 'wrap';

  if (!hasSpacing(theme, space)) {
    return undefined;
  }

  const margins = {} as CSSObject;
  const halfSpace = `calc(${negative ? '-' : ''}${theme.sizing[space]}/2)`;

  if (verticalFlows.includes(flow as Flow)) {
    margins.marginTop = halfSpace;
    margins.marginBottom = halfSpace;

    if (hasWrapping) {
      margins.marginLeft = halfSpace;
      margins.marginRight = halfSpace;
    }
  } /* istanbul ignore next */ else if (
    horizontalFlows.includes(flow as Flow)
  ) {
    margins.marginLeft = halfSpace;
    margins.marginRight = halfSpace;

    if (hasWrapping) {
      margins.marginTop = halfSpace;
      margins.marginBottom = halfSpace;
    }
  }

  return margins;
};

const getFlexDirection = ({flow, flowReverse}: StyledStackProps) => {
  const flexDir = horizontalFlows.includes(flow as Flow)
    ? flowDictionary.horizontal
    : flowDictionary.vertical;
  const reverse = flowReverse ? '-reverse' : '';
  return flexDir + reverse;
};

export const StyledMasterContainer = styled.div<StyledStackProps>`
  display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
  height: ${({flow}) =>
    [
      Flow.VerticalLeft,
      Flow.VerticalCenter,
      Flow.VerticalRight,
      Flow.HorizontalCenter,
      Flow.HorizontalBottom,
    ].includes(flow as Flow)
      ? '100%'
      : 'auto'};

  align-items: ${({flow}) => alignmentDictionary[flow]};
  flex-wrap: ${({$wrap}) => ($wrap === true ? 'wrap' : $wrap)};
  flex-grow: ${({flexGrow}) => (flexGrow === true ? 1 : flexGrow)};
  flex-shrink: ${({flexShrink}) => (flexShrink === true ? 1 : flexShrink)};
  flex-direction: ${getFlexDirection};

  justify-content: ${({stackDistribution}) =>
    stackDistribution === StackDistribution.SpaceEvenly
      ? StackDistribution.SpaceAround
      : stackDistribution};

  ${({stackDistribution}) =>
    stackDistribution === StackDistribution.SpaceEvenly
      ? css`
          &:before,
          &:after {
            content: '';
            display: block;
          }
        `
      : ''};

  ${calculateMargins(true)}
`;

export const StyledMasterContainerList = styled(StyledMasterContainer)`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`.withComponent('ul');

export const StyledMasterContainerListElement = styled(StyledMasterContainer)`
  height: 100%;
`.withComponent('li');

export const StyledChildContainer = styled.div<StyledChildProps>`
  display: inline-flex;
  ${calculateMargins()}
  order: ${({$order}) => $order};
  align-self: ${({$alignSelf}) => $alignSelf};
`;

export const StyledChildContainerListElement = styled(StyledChildContainer)`
  height: 100%;
`.withComponent('li');

export const StyledListItem = styled.li`
  height: 100%;
`;
