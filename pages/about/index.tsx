import { ReactChild, ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Container, Table } from 'react-bootstrap';
import BaseLayout from '../../components/baselayout';
import ReactMarkdown from 'react-markdown';
import * as fs from 'fs';

// 型宣言
type RenderTable = {
  children: ReactChild
}
type RenderHeading = {
  children: ReactChild,
  level: 1 | 2 | 3 | 4 | 5 | 6
}
type Props = {
  contents: string
}

// ReactMarkdownのrenderers設定
const renderers = {
  table: (content: RenderTable): ReactElement => (
    <Table striped responsive size="sm" style={{ width: 'max-content' }}>{props.children}</Table>
  ),
  heading: (content: RenderHeading): ReactElement => {
    let heading: ReactElement;
    switch(content.level) {
      // h1(title)
      case 1: heading = (<h1 className='mt-5'>{content.children}</h1>);  break;
      // h2(subtitle)
      case 2: heading = (<h2 className='mt-3'>{content.children}</h2>);  break;
      // others
      case 3: heading = (<h3>{content.children}</h3>);  break;
      case 4: heading = (<h4>{content.children}</h4>);  break;
      case 5: heading = (<h5>{content.children}</h5>);  break;
      case 6: heading = (<h6>{content.children}</h6>);  break;
      default: {
        throw new Error(`ReactMarkdown renderers receive invalid heading level : ${content.level}`)
      }
    }
    return heading;
  }
}

// コンポーネント
const About = ({ contents }: Props) => (
  <>
    <Head>
      <title>{'NextBlog - About'}</title>
    </Head>
    <BaseLayout>
      <div className="mt-3 mb-5">
        <h1 className="d-flex justify-content-center">About</h1>
        <p className="d-flex justify-content-center">私の素性を少しお教えします。</p>
      </div>
      <Container>
        <ReactMarkdown source={contents} escapeHtml={false} renderers={renderers} />
      </Container>
      <div className="mt-5 mb-5">
        <Link href="/">
          <a className="d-flex justify-content-center">{'⇦ Homeに戻る'}</a>
        </Link>
      </div>
    </BaseLayout>
  </>
);

// mdファイル読込
export const getStaticProps: GetStaticProps = async () => {
  const contents = fs.readFileSync('./pages/about/about.md', 'utf8');
  return { props: { contents: contents } };
}

export default About;