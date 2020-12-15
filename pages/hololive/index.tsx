import Head from 'next/head';
import { Container, Tabs, Tab } from 'react-bootstrap';
import BaseLayout from '../../components/baselayout';
import { HoloJPMembers, HoloENMembers, HoloIDMembers } from '../../components/hololive/portraitlist';

const Hololive = () => (
  <>
    <Head>
      <title>NexBlog - Hololive</title>
    </Head>
    <BaseLayout>
      <div className="mt-3 mb-5">
        <h1 className="d-flex justify-content-center">Hololive</h1>
        <p className="d-flex justify-content-center">自分用のホロライブまとめページです。</p>
        <p className="d-flex justify-content-center">画像をクリックすると詳細を見られます。</p>
      </div>
      <Container>
        <Tabs className="mb-5" defaultActiveKey="JP" id="group-tab">
          <Tab eventKey="JP" title="JP">
            <HoloJPMembers />
          </Tab>
          <Tab eventKey="EN" title="EN">
            <HoloENMembers />
          </Tab>
          <Tab eventKey="ID" title="ID">
            <HoloIDMembers />
          </Tab>
        </Tabs>
      </Container>
    </BaseLayout>
  </>
);

export default Hololive;