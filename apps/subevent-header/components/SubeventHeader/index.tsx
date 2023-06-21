import { withMediaQueries } from '@cx/react-utils';

import { SubeventHeader, SubeventHeaderProps } from './SubeventHeader';

export * from './SubeventHeader';

export default withMediaQueries<SubeventHeaderProps>(SubeventHeader);
