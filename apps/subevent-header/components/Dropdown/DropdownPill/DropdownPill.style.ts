import styled, { css } from 'styled-components';
import { MenuSeparator } from 'reakit/Menu';

export const StyledDropdownPillButton = styled.button`
  position: relative;
  padding: 7px 10px;
  border-radius: 16px;
  font-family: var(--ogm-font-family-2);
  color: var(--ogm-header-color-1);
  text-decoration: underline;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;

  &[aria-expanded='true'] span {
      transform: rotate(90deg);
    }
  }

  &:hover {
    background-color: var(--ogm-dropdown-pill-color-hover-1);
  }
`;

export const StyledDropdownPillIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  width: 15px;
  transform: rotate(-90deg);
`;

export const dropdownPanel = css`
  background: #fff;
  border: 1px solid var(--oc-border);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  z-index: 2;
`;

export const StyledDropdownTitleWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: #fff;
`;

export const StyledDropdownTitle = styled.h4`
  color: var(--ogm-black);
  font-family: var(--ogm-font-family-1);
`;

export const StyledDropdownItem = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  text-align: left;
  gap: 16px;
  ${(props) => props.isActive && dropdownItemActive}

  &:hover {
    cursor: pointer;
  }
`;

export const dropdownItemActive = css`
  background-color: var(--oc-bg-grey);
  text-decoration: none;
  pointer-events: none;

  &:hover {
    cursor: default;
  }
`;

export const StyledDropdownCloseButton = styled.button`
  display: flex;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const StyledDropdownMenuSeparator = styled(MenuSeparator)`
  position: sticky;
  top: 52px;
  margin: 0;
  height: 1px;
  background-color: var(--oc-border);
  border: 0;
`;
