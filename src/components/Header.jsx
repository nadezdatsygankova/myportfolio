import logo from '../assets/img/logo.png';

function Header() {
  return (
    <header className="header">
    <div className="wrapper header__wrapper">
        <div className="header__logo-line">
            <span className="header__hamburger hamburger"><span className="hamburger__line"></span></span>
            <a href="#logo" className="logo">
                <object type="image/svg+xml" data={logo} className="logo-object">
                    Your browser does not support SVG
                </object>
            </a>
        </div>
        <nav className="header__navigation">
            <ul className="navigation">
                <li className="navigation__link">Home</li>
                <li className="navigation__link">About me</li>
                <li className="navigation__link">My services</li>
                <li className="navigation__link">Recommendations</li>
                <li className="navigation__link">Education</li>
                <li className="navigation__link">Work History</li>
                <li className="navigation__link">Portfolio</li>
                <li className="navigation__link">Blog</li>
                <li className="navigation__link">Contact information</li>
            </ul>
        </nav>
    </div>
</header>
  );
}

export default Header;
