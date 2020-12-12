import Link from 'next/link';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faReact, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

// 型定義
type SiteInfo = {
  name: string,
  fa: IconDefinition,
  url: string,
  color: string
};

// 外部サイト情報
const externalSites: SiteInfo[] = [
  {name: 'twitter', fa: faTwitter, url: 'https://twitter.com/moootoko_ojisan', color: '#00aced'},
  {name: 'instagram', fa: faInstagram, url: 'https://www.instagram.com/taku_anp', color: '#ff69b4'},
  {name: 'GitHub', fa: faGithub, url:'https://github.com/moootoko', color: '#333333'}
];

// ロゴのスタイル
const brandLogoStyle = {
  paddingRight: '15px'
};
const externalSiteLogoStyle = {
  padding : '0px 15px'
};

// コンポーネント
const Header = () => (
  <Navbar bg="#ffffff" expand="md">
    <div style={brandLogoStyle}>
      <Link href="/" passHref>
        <Nav.Link>
          <FontAwesomeIcon icon={faReact} size="2x" color="#00bfff" fixedWidth />
        </Nav.Link>
      </Link>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
        <Link href="/blog" passHref>
          <Nav.Link>Blog</Nav.Link>
        </Link>
        <Link href="/hololive" passHref>
          <Nav.Link>Hololive</Nav.Link>
        </Link>
        <Link href="/VideoModalTest" passHref>
          <Nav.Link>Video Modal Test</Nav.Link>
        </Link>
        <NavDropdown className="d-block d-md-none" title="External" id="basic-nav-dropdown">
        {
          externalSites.map((obj: SiteInfo, idx: number) => (
            <NavDropdown.Item key={idx} href={obj.url} target="_blank">{obj.name}</NavDropdown.Item>
          ))
        }
        </NavDropdown>
      </Nav>
      <Nav className="ml-auto">
      {
        externalSites.map((obj: SiteInfo, idx: number) => (
          <Nav.Item key={idx} className="d-none d-md-block" style={externalSiteLogoStyle}>
            <a href={obj.url} target="_blank">
              <FontAwesomeIcon icon={obj.fa} size="2x" color={obj.color} />
            </a>
          </Nav.Item>
        ))
      }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header;