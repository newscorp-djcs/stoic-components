import React, {useContext} from 'react';
import {MenuContext} from './context';
import {MenuItemProps} from './types';
import {StyledButton, StyledMenuItem} from './styled';

import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';

export const MenuItem: React.FC<MenuItemProps> = ({
  overrides,
  children,
  selected,
  ...rest
}) => {
  const {
    vertical,
    size,
    align,
    distribution,
    overrides: menuOverrides,
  } = useContext(MenuContext);

  const theme = useTheme();
  const buttonOverrides: MenuItemProps['overrides'] = {
    ...theme.componentDefaults.menuItem[vertical ? 'vertical' : 'horizontal'],
    ...filterOutFalsyProperties(overrides),
  };

  const buttonProps = {
    ...rest,
    selected,
    size,
  };

  return (
    <StyledMenuItem
      vertical={vertical}
      distribution={distribution}
      overrides={menuOverrides}
    >
      <StyledButton
        {...buttonProps}
        align={align}
        overrides={{
          ...buttonOverrides,
          // width 100% should not be overwritten
          // move to StyledButton once PPDSC-1449 is resolved
          width: '100%',
        }}
        aria-current={selected && 'page'}
      >
        {children}
      </StyledButton>
    </StyledMenuItem>
  );
};

MenuItem.displayName = 'MenuItem';