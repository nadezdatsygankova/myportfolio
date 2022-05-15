
import photo from '../assets/img/main-photo.png'
function Home() {
return(
  <section className="promo">
  <div className="wrapper promo__wrapper">
      <div className="promo__content">
          <h1 className="promo__title">I’m Nadia Tsygankova
           Full-Stack Developer </h1>
          <p className="promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
          <div className="promo__buttons">
              <button className="button button_colored">HIRE ME</button>
          </div>
      </div>
      <img src={photo} className="promo__image" alt="portfolio-photo"/>
  </div>
</section>
)
}

export default Home;