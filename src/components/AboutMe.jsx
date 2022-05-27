import aboutMeImg from '../assets/img/whoIam1.jpg';
import aboutMeImg2 from '../assets/img/whoIam2.jpg';

function AboutMe(){

return (
<section class="about-me" id="about">
  <h2 class="section__title section__title--about">Who I am</h2>
  <p class="section__subtitle section__subtitle--about">Developer based out of Toronto</p>

  <div class="about-me__body">
    <p>Skillful web developer with 1-year of experience in Agile environment and a particular focus on the creation of user-friendly, modern applications using HTML, CSS, and JavaScript (ES6).  </p>
    <p>Excels at problem-solving, and team collaboration, and possesses a growth mindset. Passionate about the latest technologies and eager to take on new challenges.</p>
  </div>
  <img src= {aboutMeImg2} alt="Jane leaning against a bus" className="about-me__img"/>
</section>
        )
}

export default AboutMe;