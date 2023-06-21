import type { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import SubeventHeader from '../components/SubeventHeader';
import { useRouter } from 'next/router';
import { fetchSubeventHeaderData } from '../services/fetchSubeventHeaderData';

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const repub = query?.repub ? query.repub as string : 'OC';
  const subeventId = query?.subeventId ? query.subeventId as string : '97455358';

  const subeventHeaderData = await fetchSubeventHeaderData({ repub, subeventId });

  await queryClient.prefetchQuery(['subevent-header', repub, subeventId], () => subeventHeaderData, {
    initialData: subeventHeaderData,
    staleTime: Infinity,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export function Index() {
  const router = useRouter();

  const repub = router.query?.repub ? router.query.repub as string : 'OC';
  const subeventId = router.query?.subeventId ? router.query.subeventId as string : '97455358';

  return <SubeventHeader deviceType="DESKTOP" repub={repub} subeventId={subeventId} />;
}

export default Index;
