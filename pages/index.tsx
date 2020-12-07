import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import BaseLayout from '../components/baselayout';

const IndexPage = () => (
  <>
    <Head>
      <title>もーとこぶろぐ</title>
      <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet" />
    </Head>
    <BaseLayout>
      <div className="mt-3 mb-5 d-flex justify-content-center">
        <h1>もーとこぶろぐ</h1>
      </div>
      <Container>
        <Row className="mb-5 d-flex justify-content-center">
          <Col sm={4}>
            {
              [
                'このサイトはReact, Next.js, TypeScriptを学ぶために開設しました。',
                '仕事で使えるくらいまでスキルアップしたいです。'
              ].map((msg: string, idx: number) => <p key={idx}>{msg}</p>)
            }
          </Col>
          <Col sm={4}>
            <span className="d-flex justify-content-center">
              <img src="/react.svg" alt="ReactLogo" className="logo" id="react-logo" />
            </span>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col sm={4}>
            {
              [
                'でも一番好きなのはデータベースです。',
                'データベーススペシャリストに、おれはなる！！'
              ].map((msg: string, idx: number) => <p key={idx}>{msg}</p>)
            }
          </Col>
          <Col sm={4}>
            <span className="d-flex justify-content-center">
              <img src="/mariadb.svg" alt="MariaDB" className="logo" id="dbLogo" />
            </span>
          </Col>
        </Row>
      </Container>
    </BaseLayout>
    <style jsx>{`
      .logo {
        max-width: 50%;
        height: auto;
        opacity: 0.3;
      }
      #react-logo {
        animation: 5s linear infinite rotation1;
      }
      @keyframes rotation1{
        0%{ transform:rotate(0);}
        100%{ transform:rotate(360deg); }
      }
    `}</style>
  </>
);

export default IndexPage;
