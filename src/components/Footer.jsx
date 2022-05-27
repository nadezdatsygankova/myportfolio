import logo from '../assets/img/logo.png';
import logo2 from '../assets/img/logo2.png';
import logoBlue from '../assets/img/logoBlue.png';

function Footer() {
  return (
    <footer className="footer">
    <a href="mailto:tsygankovanadian@gmail.com" class="footer__link">tsygankovanadian@gmail.com</a>
    <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.linkedin.com/in/nadezdatsygankova/">LinkedIn</a></li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/nadezdatsygankova"> GitHub
          </a></li>
          <li className="social-list__item">
          <a className="social-list__link" href="https://www.codewars.com/users/nadezdatsygankova">Codewars</a></li>
    </ul>
</footer>
  );
}

export default Footer;
