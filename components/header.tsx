import Link from 'next/link';

const Header = () => (
<nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
  <div className="uk-navbar-left">
    <ul className="uk-navbar-nav">
      <Link href="/"></Link>
      <li className="uk-active"><a href="#">Active</a></li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
</nav>
)

export default Header;