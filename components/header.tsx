import Link from 'next/link';

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo right">LOGO</a>
      <ul id="mav-mobile" className="left hide-on-med-and-down">
        <li><Link href="/" passHref>HOME</Link></li>
        <li><Link href="/about" passHref>About</Link></li>
      </ul>
    </div>
  </nav>
)

export default Header;