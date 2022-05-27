import aboutMeImg from '../assets/img/whoIam1.jpg';
import aboutMeImg2 from '../assets/img/whoIam2.jpg';

function AboutMe(){

return (
<section class="about-me" id="about">
  <h2 class="section__title section__title--about">Who I am</h2>
  <p class="section__subtitle section__subtitle--about"></p>

  <div class="about-me__body">
    <p></p>
    <p></p>
  </div>
  <img src= {aboutMeImg2} alt="Jane leaning against a bus"/>
</section>
        )
}

export default AboutMe;