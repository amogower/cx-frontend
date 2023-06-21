import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Footer = dynamic(
  () => import('footer/Footer').then((mod) => mod.default),
  {
    ssr: true,
  }
);

const OddsGrid = dynamic(
  () => import('odds-grid/OddsGrid').then((mod) => mod.default),
  {
    ssr: true,
  }
);

// const SubeventHeader = dynamic(
//   () => import('subevent-header/SubeventHeader').then((mod) => mod.default),
//   {
//     ssr: true,
//   }
// );

const StyledPage = styled.div`
  align-items: center;
  margin: 15px;
  padding: 15px;
  border: 4px dashed orangered;
  border-radius: 0.25rem;
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const page = await import('subevent-header/SubeventHeaderPage');

  // if (page.getServerSideProps) {
  //   return page.getServerSideProps(context);
  // }

  return {
    props: {},
  };
}

export function Page() {
  const router = useRouter();

  const repub = router.query?.repub ? router.query.repub as string : 'OC';
  const subeventId = router.query?.subeventId ? router.query.subeventId as string : '97455358';

  return (
    <StyledPage>
      {/* <SubeventHeader
        deviceType="DESKTOP"
        repub={repub}
        subeventId={subeventId}
      /> */}
      <OddsGrid />
      <Footer />
    </StyledPage>
  );
}

export default Page;
