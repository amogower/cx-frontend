export type SubeventHeaderRequestParams = {
  repub: string;
  subeventId: string;
};

export type SubeventHeaderResponseData = {
  breadcrumbs: Breadcrumb[];
  eventName: string;
  inRunning: boolean;
  relatedSubevents: RelatedSubevent[];
  subeventEndTime: string;
  subeventName: string;
  subeventStartTime: string;
  subeventUrl: string;
};

export type Breadcrumb = {
  name: string;
  url: string;
};

export type RelatedSubevent = {
  subeventName: string;
  subeventStartTime: string;
  subeventUrl: string;
};

export const fetchSubeventHeaderData = async ({
  repub,
  subeventId,
}: SubeventHeaderRequestParams): Promise<SubeventHeaderResponseData> => {
  const endpoint = `${process.env.NEXT_PUBLIC_CX_API_URL}/v1/subevent-header/${subeventId}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ repub }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
