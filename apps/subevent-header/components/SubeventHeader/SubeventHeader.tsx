import { useCallback, useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useQuery } from '@tanstack/react-query';

import { isDesktopQuery, isTabletOrMobileQuery } from '@cx/react-utils';

import { DropdownPill } from '../Dropdown';
import { SchemaJSONLD } from '../SchemaJSONLD';
import { SubeventHeaderDesktopContent } from '../SubeventHeaderDesktopContent';
import { Chevron } from '../icons';
import {
  StyledBreadcrumbIcon,
  StyledDropdownButtonWrapper,
  StyledDropdownIcon,
  StyledInPlayIcon,
  StyledRelatedSubeventContainer,
  StyledRelatedSubeventDatetime,
  StyledRelatedSubeventName,
  StyledRelatedSubeventNameContainer,
  StyledSubeventBodyWrapper,
  StyledSubeventDatetime,
  StyledSubeventDatetimeWrapper,
  StyledSubeventEventLink,
  StyledSubeventEventLinkWrapper,
  StyledSubeventHeaderContentContainer,
  StyledSubeventHeaderTextWrapper,
  StyledSubeventHeaderWrapper,
  StyledSubeventTitleMobile,
  StyledSubeventTitleMobileDropdown,
} from './SubeventHeader.style';
import {
  formatFullDate,
  formatFullDatetime,
  formatShortDatetime,
} from '../../utils';
import {
  RelatedSubevent,
  SubeventHeaderRequestParams,
  SubeventHeaderResponseData,
  fetchSubeventHeaderData,
} from '../../services/fetchSubeventHeaderData';

export type SubeventHeaderProps = SubeventHeaderRequestParams;

export const SubeventHeader = ({
  repub,
  subeventId,
}: SubeventHeaderProps): JSX.Element => {
  const { data } = useQuery<SubeventHeaderResponseData>(
    ['subevent-header', repub, subeventId],
    () => fetchSubeventHeaderData({ repub, subeventId }),
    {
      initialData: {
        breadcrumbs: [],
        eventName: '',
        inRunning: false,
        relatedSubevents: [],
        subeventEndTime: '',
        subeventName: '',
        subeventStartTime: '',
        subeventUrl: '',
      },
      staleTime: Infinity,
    }
  );

  const {
    breadcrumbs,
    eventName,
    inRunning,
    relatedSubevents,
    subeventEndTime,
    subeventName,
    subeventStartTime,
    subeventUrl,
  } = data;

  const [date, setDate] = useState(formatFullDate(subeventStartTime));

  useEffect(() => {
    setDate(`${formatFullDatetime(subeventStartTime)}`);
  }, [subeventStartTime]);

  const isDesktop = useMediaQuery(isDesktopQuery);
  const isMobileOrTablet = useMediaQuery(isTabletOrMobileQuery);

  const siblingMatches = useMemo(
    () =>
      [
        {
          subeventName,
          subeventStartTime,
          subeventUrl: '',
        },
        ...relatedSubevents,
      ].map((relatedSubevent) => ({
        id: relatedSubevent.subeventName,
        ...relatedSubevent,
      })),
    [relatedSubevents, subeventName, subeventStartTime]
  );

  const breadcrumb = breadcrumbs[breadcrumbs.length - 2];

  const handleMatchChangeClick = ({ subeventUrl }: RelatedSubevent) => {
    window.location.href = subeventUrl;
  };

  const toggleBodyScroll = useCallback((shouldBlockScroll: boolean) => {
    document.body.style.overflow = shouldBlockScroll ? 'hidden' : 'visible';
  }, []);

  const handleHideDropdown = useCallback(() => {
    toggleBodyScroll(false);
  }, [toggleBodyScroll]);

  const handleShowDropdown = useCallback(() => {
    toggleBodyScroll(true);
  }, [toggleBodyScroll]);

  const renderDropdownOnMobileOrTablet = (): JSX.Element | void => {
    if (isMobileOrTablet)
      return (
        <StyledSubeventTitleMobile data-label="Change Match">
          {subeventName}
          <StyledDropdownButtonWrapper>
            <StyledSubeventTitleMobileDropdown>
              Betting Odds
            </StyledSubeventTitleMobileDropdown>
            <StyledDropdownIcon>
              <Chevron />
            </StyledDropdownIcon>
          </StyledDropdownButtonWrapper>
        </StyledSubeventTitleMobile>
      );
  };

  const renderSubeventHeaderContent = (): JSX.Element => {
    if (isDesktop) {
      return (
        <SubeventHeaderDesktopContent
          date={subeventStartTime}
          dateFormatted={date}
          eventName={eventName}
          inRunning={inRunning}
          handleHideDropdown={handleHideDropdown}
          handleMatchChangeClick={handleMatchChangeClick}
          handleShowDropdown={handleShowDropdown}
          siblingMatches={siblingMatches}
          subeventName={subeventName}
        />
      );
    }

    return (
      <StyledSubeventHeaderContentContainer>
        <StyledSubeventHeaderTextWrapper className="ogm-subevent-header__title">
          <DropdownPill
            ariaLabel="Change Match"
            baseId="change-match-dropdown"
            button={renderDropdownOnMobileOrTablet()}
            buttonText="Change Match"
            items={siblingMatches}
            onClick={handleMatchChangeClick}
            onHide={handleHideDropdown}
            onShow={handleShowDropdown}
            placement={isDesktop ? 'bottom' : 'bottom-start'}
            renderItem={({ subeventName, subeventStartTime }) => (
              <StyledRelatedSubeventContainer>
                <StyledRelatedSubeventDatetime>
                  {formatShortDatetime(subeventStartTime)}
                </StyledRelatedSubeventDatetime>
                <StyledRelatedSubeventNameContainer>
                  <StyledRelatedSubeventName>
                    {subeventName}
                  </StyledRelatedSubeventName>
                </StyledRelatedSubeventNameContainer>
              </StyledRelatedSubeventContainer>
            )}
            title={eventName}
          />
        </StyledSubeventHeaderTextWrapper>
        <StyledSubeventDatetimeWrapper>
          <StyledSubeventDatetime>{date}</StyledSubeventDatetime>
          {inRunning && <StyledInPlayIcon>Live</StyledInPlayIcon>}
        </StyledSubeventDatetimeWrapper>
      </StyledSubeventHeaderContentContainer>
    );
  };

  return (
    <div>
      <SchemaJSONLD
        eventName={eventName}
        subeventEnd={subeventEndTime}
        subeventStart={subeventStartTime}
        subeventName={subeventName}
        subeventUrl={subeventUrl}
      />
      <StyledSubeventHeaderWrapper>
        {!!breadcrumb && (
          <StyledSubeventEventLinkWrapper>
            <StyledBreadcrumbIcon>
              <Chevron />
            </StyledBreadcrumbIcon>
            <StyledSubeventEventLink
              href={breadcrumb.url}
              className="ogm-subevent-header__breadcrumb"
              title={breadcrumb.name}
            >
              {eventName}
            </StyledSubeventEventLink>
          </StyledSubeventEventLinkWrapper>
        )}
        <StyledSubeventBodyWrapper id="subevent-header">
          {renderSubeventHeaderContent()}
        </StyledSubeventBodyWrapper>
      </StyledSubeventHeaderWrapper>
    </div>
  );
};
