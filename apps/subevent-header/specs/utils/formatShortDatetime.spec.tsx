import { formatShortDatetime } from '../../utils';

describe('formatShortDatetime', () => {
  it('should format a date correctly', () => {
    const datetime = 'Thu Nov 17 1983 17:11:17 GMT+0000';

    // using local hours for when running in different timezone
    const hours = new Date(datetime).getHours();
    const formattedDate = formatShortDatetime(datetime);

    expect(formattedDate).toEqual(`17/11 ${hours}:11`);
  });
});
