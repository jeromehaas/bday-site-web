import Head from 'next/head';
import { PageWrapper } from 'components/PageWrapper';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bday Site App</title>
        <meta name='description' content='Overview of all friends birthdays' />
      </Head>

      <PageWrapper>
     		hello world
      </PageWrapper>

    </div>
  );
}
