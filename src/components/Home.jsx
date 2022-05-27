import photo from '../assets/img/introduction.jpg';

function Home() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <span className = "section_title_color">Nadia Tsygankova</span>
      </h1>
      <p className="section__subtitle section__subtitle--intro">full stack developer</p>
      <img src={photo} alt="a picture of Nadia Tsygankova" className="intro__img" />
    </section>
  );
}

export default Home;
