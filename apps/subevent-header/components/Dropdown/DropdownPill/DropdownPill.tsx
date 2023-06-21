import { ReactElement, ReactNode, useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { PopoverState } from 'reakit';
import { useMenuState } from 'reakit/Menu';

// import { useThemeImgSrc } from '@ogm/shared-hooks';
import { isTabletOrDesktopQuery } from '@cx/react-utils';

import { Close } from '../../icons/close';
import { Dropdown } from '../Dropdown';

import {
  StyledDropdownCloseButton,
  StyledDropdownItem,
  StyledDropdownMenuSeparator,
  StyledDropdownPillButton,
  StyledDropdownTitle,
  StyledDropdownTitleWrapper,
} from './DropdownPill.style';

export interface DropdownPillProps {
  ariaLabel?: string;
  baseId?: string;
  button?: ReactElement | void;
  buttonText?: string;
  items: Record<string, any>[];
  onClick(item: any): void;
  onHide?(): void;
  onShow?(): void;
  placement?: PopoverState['placement'];
  renderItem(item: any, index: number): ReactNode;
  title?: string;
}

export const DropdownPill = ({
  ariaLabel,
  baseId,
  button,
  buttonText,
  items,
  onClick,
  onHide,
  onShow,
  placement,
  renderItem,
  title,
}: DropdownPillProps): JSX.Element => {
  const isTabletOrDesktop = useMediaQuery(isTabletOrDesktopQuery);

  const menu = useMenuState({
    gutter: 7,
    placement: placement || 'bottom',
    baseId: baseId || undefined,
  });
  const { visible } = menu;

  useEffect(() => {
    if (visible && typeof onShow === 'function') {
      onShow();
    } else if (!visible && typeof onHide === 'function') {
      onHide();
    }
  }, [onHide, onShow, visible]);

  const disclosureButton = useMemo(() => {
    if (button) return button;

    return <StyledDropdownPillButton>{buttonText}</StyledDropdownPillButton>;
  }, [button, buttonText]);

  const menuItems = useMemo(() => {
    const itemArr = items.map((item, index) => {
      const isActive = index === 0;
      const props = {
        ...(isActive ? {} : { onClick: () => onClick(item) }),
      };
      return (
        // Key is applied by Reakit in <Dropdown /> component so we can
        // ignore here:
        // eslint-disable-next-line react/jsx-key
        <StyledDropdownItem isActive={isActive} {...props}>
          {renderItem(item, index)}
        </StyledDropdownItem>
      );
    });

    if (title) {
      itemArr.unshift(
        <StyledDropdownTitleWrapper>
          <StyledDropdownTitle>{title}</StyledDropdownTitle>
          {!isTabletOrDesktop && (
            <StyledDropdownCloseButton onClick={menu.toggle}>
              <Close />
            </StyledDropdownCloseButton>
          )}
        </StyledDropdownTitleWrapper>,
        <StyledDropdownMenuSeparator />
      );
    }

    return itemArr;
  }, [
    // iconCloseSrc,
    isTabletOrDesktop,
    items,
    menu.toggle,
    onClick,
    renderItem,
    title,
  ]);

  return (
    <Dropdown
      disclosure={disclosureButton}
      menu={menu}
      menuItems={menuItems}
      menuProps={{
        'aria-label': ariaLabel,
        // className: dropdownPanel,
      }}
    />
  );
};
