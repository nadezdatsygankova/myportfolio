import photo from '../assets/img/introduction.jpg';

function Home() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Nadia Tsygankova</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">front-end dev</p>
      <img src={photo} alt="a picture of Nadia Tsygankova" />
    </section>
  );
}

export default Home;
