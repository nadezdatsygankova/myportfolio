function Portfolio() {
  return (
    <section class="strategies">
        <div class="wrapper">
            <h2 class="strategies__title">Portfolio</h2>
            <p class="strategies__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
            <div class="strategies__tags tags">
                <span class="tag tag_selected">All categories</span>
                <span class="tag tag_bordered">Web Templates</span>
                <span class="tag tag_bordered">React web</span>
                <span class="tag tag_bordered">JS program</span>
                <span class="tag tag_bordered">NodeJS Program</span>
            </div>
            <div class="layout-3-column strategy-wrapper">
                <article class="strategy block-shadowed">
                    <img class="strategy__image" src="./src/img/strategies/1.jpg" alt="strategy"/>
                    <div class="strategy__content">
                        <h3 class="strategy__name">Increasing Prosperity With Positive Thinking</h3>
                        <div class="strategy__tags tags">
                            <span class="tag tag_colored">Art</span>
                            <span class="tag tag_colored">Design</span>
                        </div>
                    </div>
                </article>
                <article class="strategy block-shadowed">
                    <img class="strategy__image" src="./src/img/strategies/2.jpg" alt="strategy"/>
                    <div class="strategy__content">
                        <h3 class="strategy__name">Motivation Is The First Step To Success</h3>
                        <div class="strategy__tags tags">
                            <span class="tag tag_colored">Culture</span>
                        </div>
                    </div>
                </article>
                <article class="strategy block-shadowed">
                    <img class="strategy__image" src="./src/img/strategies/3.jpg" alt="strategy"/>
                    <div class="strategy__content">
                        <h3 class="strategy__name">Success Steps For Your Personal Or Business Life</h3>
                        <div class="strategy__tags tags">
                            <span class="tag tag_colored">Culture</span>
                            <span class="tag tag_colored">Design</span>
                            <span class="tag tag_colored">Art</span>
                        </div>
                    </div>
                </article>
                <article class="strategy strategy_wide block-shadowed">
                    <img class="strategy__image" src="./src/img/strategies/4.jpg" alt="strategy"/>
                    <div class="strategy__content">
                        <h3 class="strategy__name">Success Steps For Your Personal Or Business Life Plus Funny Image on
                            the Back</h3>
                        <div class="strategy__tags tags">
                            <span class="tag tag_colored">Culture</span>
                            <span class="tag tag_colored">Design</span>
                            <span class="tag tag_colored">Art</span>
                        </div>
                    </div>
                </article>
                <article class="strategy block-shadowed">
                    <img class="strategy__image" src="./src/img/strategies/5.jpg" alt="strategy"/>
                    <div class="strategy__content">
                        <h3 class="strategy__name">Increasing Prosperity With Positive Thinking</h3>
                        <div class="strategy__tags tags">
                            <span class="tag tag_colored">Design</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Portfolio;