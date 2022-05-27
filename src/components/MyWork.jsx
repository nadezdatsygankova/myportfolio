import photo1 from '../assets/img//work/1.jpeg';
import photo2 from '../assets/img//work/2.jpeg';
import photo3 from '../assets/img//work/3.jpeg';
import photo4 from '../assets/img//work/4.jpeg';
import photo5 from '../assets/img//work/5.jpeg';
import photo6 from '../assets/img//work/6.jpeg';
import photo7 from '../assets/img//work/7.jpeg';
import photo8 from '../assets/img//work/8.jpeg';


function MyWork() {
return(
<section className="my-work" id="work">
            <h2 className="section__title">My work</h2>
            <p className="section__subtitle"></p>

            <div className="portfolio">
                <a href="#" className="portfolio__item">
                    <img src={photo1} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo2} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo3} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo4} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo5} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo6} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo7} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo8} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo4} alt="" className="portfolio__img"/>
                </a>

                <a href="#" className="portfolio__item">
                    <img src={photo4} alt="" className="portfolio__img"/>
                </a>
            </div>
        </section>
)
}

export default MyWork