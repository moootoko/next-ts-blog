import Link from 'next/link';
import { Nav, Navbar, NavDropdown, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faReact, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

type IconInfo = {
  name: string,
  fa: IconDefinition,
  url: string,
  color: string
};

// ロゴの情報
const snsInfo: IconInfo[] = [
  {name: 'twitter', fa: faTwitter, url: 'https://twitter.com/moootoko_ojisan', color: '#00aced'},
  {name: 'instagram', fa: faInstagram, url: 'https://www.instagram.com/taku_anp', color: '#ff69b4'},
];

// ロゴのスタイル
const brandLogoStyle = {
  paddingRight: '15px'
};
const snsLogoStyle = {
  padding : '0px 15px'
};

// コンポーネント
const Header = () => (
  <Navbar bg="#ffffff" expand="md">
    <div style={brandLogoStyle}>
      <Link href="/" passHref>
        <Nav.Link><FontAwesomeIcon icon={faReact} size="2x" color="#00bfff" fixedWidth /></Nav.Link>
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
        <NavDropdown className="d-block d-md-none" title="External" id="basic-nav-dropdown">
        {
          snsInfo.map((obj, idx) => (
            <NavDropdown.Item key={idx} href={obj.url} target="_blank">{obj.name}</NavDropdown.Item>
          ))
        }
        </NavDropdown>
      </Nav>
      <Nav className="ml-auto">
      {
        snsInfo.map((obj, idx) => (
          <OverlayTrigger
            key={idx}
            placement="bottom"
            overlay={
              <Tooltip id={`tooltip-${obj.name}`}>
                <strong>{obj.name}</strong>
              </Tooltip>
            }
          >
            <Nav.Item className="d-none d-md-block" style={snsLogoStyle}>
              <a href={obj.url} target="_blank">
                <FontAwesomeIcon icon={obj.fa} size="2x" color={obj.color} />
              </a>
            </Nav.Item>
          </OverlayTrigger>
        ))
      }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header;