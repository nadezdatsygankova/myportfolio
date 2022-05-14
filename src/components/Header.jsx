import logo from '../assets/img/logo.png';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="logo"></img>
          <div>
            <h1>Nadia Tsygankova</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
