import coding from '../assets/img/Icons/coding.png';
import photo from '../assets/img/Icons/Photographer.png';
import game from '../assets/img/Icons/game-development.png';
import illus from '../assets/img/Icons/illustration.png';
import microphone from '../assets/img/Icons/Microphone.png';


function Services(){
  return (
    <section className="strategies">
    <div className="wrapper">
        <h2 className="strategies__title">My services</h2>
        <p className="strategies__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        {/* <div className="strategies__tags tags">
            <span className="tag tag_selected">All</span>
            <span className="tag tag_bordered">Art</span>
            <span className="tag tag_bordered">Culture</span>
            <span className="tag tag_bordered">Design</span>
        </div> */}
        <div className="layout-3-column strategy-wrapper">
            <article className="strategy block-shadowed">
                <img className="strategy__image" src={coding} alt="strategy"/>
                <div className="strategy__content">
                    <h3 className="strategy__name">Web development</h3>
                    <h4>blog, e-commerce</h4>
                    {/* <div className="strategy__tags tags">
                        <span className="tag tag_colored">Art</span>
                        <span className="tag tag_colored">Design</span>
                    </div> */}
                </div>
            </article>
            <article className="strategy block-shadowed">
                <img className="strategy__image" src={photo} alt="strategy"/>
                <div className="strategy__content">
                    <h3 className="strategy__name">Motivation Is The First Step To Success</h3>
                    <div className="strategy__tags tags">
                        <span className="tag tag_colored">Culture</span>
                    </div>
                </div>
            </article>
            <article className="strategy block-shadowed">
                <img className="strategy__image" src={game} alt="strategy"/>
                <div className="strategy__content">
                    <h3 className="strategy__name">Success Steps For Your Personal Or Business Life</h3>
                    <div className="strategy__tags tags">
                        <span className="tag tag_colored">Culture</span>
                        <span className="tag tag_colored">Design</span>
                        <span className="tag tag_colored">Art</span>
                    </div>
                </div>
            </article>
            <article className="strategy strategy_wide block-shadowed">
                <img className="strategy__image" src={illus} alt="strategy"/>
                <div className="strategy__content">
                    <h3 className="strategy__name">Success Steps For Your Personal Or Business Life Plus Funny Image on
                        the Back</h3>
                    <div className="strategy__tags tags">
                        <span className="tag tag_colored">Culture</span>
                        <span className="tag tag_colored">Design</span>
                        <span className="tag tag_colored">Art</span>
                    </div>
                </div>
            </article>
            <article className="strategy block-shadowed">
                <img className="strategy__image" src={microphone}alt="strategy"/>
                <div className="strategy__content">
                    <h3 className="strategy__name">Increasing Prosperity With Positive Thinking</h3>
                    <div className="strategy__tags tags">
                        <span className="tag tag_colored">Design</span>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>
  )
}

export default Services;