import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Twemoji } from 'react-emoji-render';
import BaseLayout from '../../components/baselayout';
import ModalClips from '../../components//hololive/modal-clips';
import { TwitterButton, YoutubeButton } from '../../components/hololive/external-site-buttons';
import holoMember, { MemberContent } from '../../utils/hololive/member-data';

type Props = {
  name: string,
  content: MemberContent
}

const basicStatus = (emoji: string, birthday: string, debut: string) => {
  return (
    <>
      <p>推し絵文字：<Twemoji svg text={emoji} /></p>
      <p>誕生日：{birthday}</p>
      <p>デビュー日：{debut}</p>
    </>
  )
};

const [imgWidth, imgHeight] = [150, 150];
const embedUrlPrefix = 'https://www.youtube.com/embed/';

const memberContent = ({ name, content }: Props) => (
  <>
    <Head>
      <title>もーとこぶろぐ - Hololive</title>
    </Head>
    <BaseLayout>
      <Container className="mt-5">
        <Row className="pb-3 border-bottom">
          <Col xs={4} sm={3}>
            <Image src={`/hololive/portraits/${name.toLowerCase()}.jpg`} alt={content.name} width={imgWidth} height={imgHeight} />
          </Col>
          <Col xs={8} sm={9}>
            <h3>{content.name}</h3>
            {basicStatus(content.oshiEmoji, content.birthday, content.debut)}
          </Col>
        </Row>
        <Row className="py-3 border-bottom">
          <Col xs={12} sm={6} className="mb-5 mb-sm-0">
            <h3>YouTube</h3>
            <YoutubeButton id={content.youtubeChannel.id} name={content.youtubeChannel.name} />
            <h4 className="mt-3">歌ってみた</h4>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={embedUrlPrefix + content.song} allowFullScreen />
            </div>
            <h4 className="mt-3">おすすめ切り抜き</h4>
            <ModalClips clipsId={content.clips}/>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <h3>Twitter</h3>
              <TwitterButton
                id={content.twitter.id}
                name={content.twitter.name}
              />
            </div>
            <div className="mt-3">
              {Object.keys(content.twitter.tags)
                .sort()
                .map((key: string, idx: number) => (
                  <div className="py-2" key={idx}>
                    <h6>{key}</h6>
                    <Button variant="outline-primary" href={'https://twitter.com/hashtag/' + content.twitter.tags[key]} target="_blank">
                      {'#' + content.twitter.tags[key]}
                    </Button>
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
        <div className="mt-5 mb-5">
          <Link href="/hololive">
            <a className="d-flex justify-content-center">{'⇦ Hololiveトップに戻る'}</a>
          </Link>
        </div>
      </Container>
    </BaseLayout>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = Object.keys(holoMember).map(name => `/hololive/${name}`);
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const memberContent: MemberContent = holoMember[`${params.membername}`];
  return {
    props: {
      name: params.membername,
      content: memberContent
    }
  }
};

export default memberContent