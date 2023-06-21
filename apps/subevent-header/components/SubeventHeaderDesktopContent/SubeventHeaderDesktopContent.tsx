import {
  DropdownPill,
  StyledDropdownPillButton,
  StyledDropdownPillIconWrapper,
} from '../Dropdown';
import { Chevron } from '../icons';
import {
  StyledInPlayIcon,
  StyledRelatedSubeventDatetime,
  StyledRelatedSubeventName,
  StyledSubeventDatetime,
  StyledSubeventDatetimeWrapper,
  StyledSubeventHeaderTextWrapper,
} from '../SubeventHeader/SubeventHeader.style';
import { formatShortDatetime } from '../../utils';

import {
  StyledSubeventHeaderContentContainer,
  StyledSubeventTitle,
} from './SubeventHeaderDesktopContent.style';
import { RelatedSubevent } from '../../services/fetchSubeventHeaderData';

export interface SubeventHeaderContentProps {
  date: string;
  dateFormatted: string;
  eventName: string;
  handleHideDropdown(): void;
  handleMatchChangeClick(relatedSubevent: RelatedSubevent): void;
  handleShowDropdown(): void;
  inRunning: boolean;
  siblingMatches: (RelatedSubevent & { id: string })[];
  subeventName: string;
}

export const SubeventHeaderDesktopContent = ({
  date,
  dateFormatted,
  eventName,
  handleHideDropdown,
  handleMatchChangeClick,
  handleShowDropdown,
  inRunning,
  siblingMatches,
  subeventName,
}: SubeventHeaderContentProps): JSX.Element => {
  const renderDesktopButton = () => (
    <StyledDropdownPillButton data-label="Change Match">
      Change Match
      <StyledDropdownPillIconWrapper>
        <Chevron />
      </StyledDropdownPillIconWrapper>
    </StyledDropdownPillButton>
  );

  return (
    <StyledSubeventHeaderContentContainer>
      <StyledSubeventHeaderTextWrapper className="ogm-subevent-header__title">
        <StyledSubeventTitle>
          {subeventName} - Betting Odds
          {inRunning && <StyledInPlayIcon>Live</StyledInPlayIcon>}
        </StyledSubeventTitle>
        <DropdownPill
          ariaLabel="Change Match"
          button={renderDesktopButton()}
          baseId="change-match-dropdown"
          buttonText="Change Match"
          items={siblingMatches}
          onClick={handleMatchChangeClick}
          onHide={handleHideDropdown}
          onShow={handleShowDropdown}
          placement="bottom"
          renderItem={({ subeventName, subeventStartTime }) => (
            <>
              <StyledRelatedSubeventDatetime>
                {formatShortDatetime(subeventStartTime)}
              </StyledRelatedSubeventDatetime>
              <StyledRelatedSubeventName>
                {subeventName}
              </StyledRelatedSubeventName>
            </>
          )}
          title={eventName}
        />
      </StyledSubeventHeaderTextWrapper>
      <StyledSubeventDatetimeWrapper>
        {/* <TvIcon /> belongs here: it should be a standard size so we don't have width/height logic based on product */}
        {/* It should be an <img> tag with fixed width/height for Core Web Vitals reasons */}
        <StyledSubeventDatetime dateTime={new Date(date).toISOString()}>
          {dateFormatted}
        </StyledSubeventDatetime>
      </StyledSubeventDatetimeWrapper>
    </StyledSubeventHeaderContentContainer>
  );
};
