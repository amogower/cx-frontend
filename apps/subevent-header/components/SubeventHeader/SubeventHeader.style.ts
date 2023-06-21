import styled, { css } from 'styled-components';

export const StyledSubeventHeaderWrapper = styled.div`
  padding: 12px 16px;
  background-color: var(--ogm-header-bg-color-1);
  color: var(--ogm-header-color-1);
  font-family: var(--ogm-font-family-1);

  @media (min-width: 1024px) {
    padding: 15px 64px;
  }
`;

export const StyledBreadcrumbIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9px;
`;

export const StyledSubeventEventLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: unset;

  @media (min-width: 768px) {
    padding: 15px 25px 0;
  }

  @media (min-width: 1024px) {
    padding: 15px 0 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledSubeventEventLink = styled.a`
  position: relative;
  color: inherit;
  text-decoration: none;
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const StyledSubeventBodyWrapper = styled.div`
  @media (min-width: 1024px) {
    position: sticky;
    top: 55px;
    right: 0;
    left: 0;
    z-index: 102;
  }
`;

//z-index needs to be 100 so it doesn't cover the takeover ads
export const StyledSubeventHeaderTabWrapper = styled.div<{
  shouldShrink: boolean;
  subeventHeaderHeight: number;
}>`
  --subevent-header-height: ${({ shouldShrink, subeventHeaderHeight }) =>
    shouldShrink
      ? `calc(${subeventHeaderHeight} * 0.8px)`
      : `calc(${subeventHeaderHeight} * 1px)`};
  background-color: var(--oc-primary-white);

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--subevent-header-height);
    right: 0;
    left: 0;
    z-index: 100;
  }
`;

export const StyledSubeventHeaderContentContainer = styled.div`
  margin-top: 8px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 20px 25px 15px;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    position: sticky;
    top: 55px;
    right: 0;
    left: 0;
    z-index: 102;
  }
`;

export const StyledSubeventTitleMobileDropdown = styled.span`
  font-size: 22px;
  font-family: inherit;
`;

export const StyledSubeventTitleMobile = styled.h1`
  position: relative;
  padding: 0 20px 0 0;
  font-size: 22px;
  font-family: inherit;
  cursor: pointer;

  &[aria-expanded='true'] span svg {
    transform: rotate(180deg);
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

export const StyledDropdownButtonWrapper = styled.span`
  display: flex;
  align-items: center;
  font-family: inherit;
  gap: 4px;
`;

export const StyledDropdownIcon = styled.span`
  height: 15px;
  width: 15px;
  transform: rotate(270deg);

  &[aria-expanded='true'] {
    transform: rotate(180deg);
  }
`;

export const StyledSubeventMenuWrapper = styled.div`
  box-shadow: none;

  @media (min-width: 600px) {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }
`;
export const StyledRelatedSubeventContainer = styled.div`
  display: grid;
  grid-template-columns: 85px 1fr;
  grid-column-gap: 15px;
`;

export const StyledRelatedSubeventDatetime = styled.span`
  min-width: 55px;
  font-family: var(--ogm-font-family-2);
  font-size: 11px;
  line-height: 19px;
  font-weight: 400
  color: var(--oc-text-subtext);
`;
export const StyledRelatedSubeventNameContainer = styled.div`
  display: grid;
  grid-template-columns: auto min-content auto;
  grid-column-gap: 5px;
`;

export const StyledRelatedSubeventName = styled.span`
  font-family: var(--ogm-font-family-2);
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  color: var(--oc-text-body);

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledSubeventHeaderTextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 1;

  button {
    white-space: nowrap;
  }

  #change-match-dropdown {
    inset: 0px 0px auto 0px !important;
    max-height: 400px;
    overflow-y: scroll;
  }

  @media (min-width: 1024px) {
    #change-match-dropdown {
      inset: 0px auto auto 0px !important;
    }
  }
`;

export const StyledSubeventDatetime = styled.time`
  display: flex;
  align-items: center;
  font-family: var(--ogm-font-family-2);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  white-space: nowrap;

  @media (min-width: 1024px) {
    font-size: 14px;
    margin-left: 10px;
  }
`;

export const StyledSubeventDatetimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0 0 0 auto;
  }
`;

export const offersPresentIcon = css`
  width: 16px;
  height: 15px;
  position: relative;
  top: 3px;
`;

export const matchStatsNewIcon = css`
  display: flex;

  & span {
    position: relative;
    margin: 0 4px;
  }
`;

export const StyledInPlayIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 14px
  width: 32px;
  padding: 0 6px;
  background-color: var(--oc-secondary-red);
  border-radius: 3px;
  font-family: var(--oc-font-family);
  font-size: 10px;
  font-weight: 800;
  color: var(--oc-text-white);
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const StyledMenuDivider = styled.div`
  height: 11px;
  width: 100%;
  border: 1px solid var(--oc-line-secondary);
  background-color: var(--oc-bg-grey);

  @media (min-width: 600px) {
    display: none;
  }
`;

export const StyledLiveStatsHeaderFallback = styled.div`
  height: 102px;

  @media (min-width: 768px) {
    height: 202px;
  }
`;
