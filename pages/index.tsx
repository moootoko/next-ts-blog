import Head from 'next/head';

const IndexPage = () => (
  <>
    <Head>
      <title>もーとこぶろぐ</title>
    </Head>
    <div className="container">
      <h2 id="title" className="text-center">もーとこぶろぐ</h2>
      <h5 className="text-center">このサイトはReact、Next.js、TypeScriptを学ぶために開設しました。</h5>
    </div>
  </>
);

export default IndexPage;
