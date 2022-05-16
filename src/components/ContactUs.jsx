function ContactUs(){

  return(
    <section class="contact-us">
    <div class="wrapper">
        <h2 class="contact-us__title">Contact Us</h2>
        <div class="layout-2-column contact-us-container">
            <div class="contact-us__content">
                <p class="contact-us__text">Your About Us page is vital. It’s often the first stop in any user’s
                    journey through a website or blog. It also shouldn’t be their last, because first impressions
                    count online just as much as they do in the real world. If your visitors aren’t impressed, you
                    can expect them to leave without reading your awesome content or completing a conversion action
                    (e.g., signing up for your newsletter, making a purchase).</p>
                <p class="contact-us__link">
                    <span class="icon-round icon-round_white"><span class="ico ico_phone"></span></span>
                    <a href="tel:+375111111111">+375 (22) 345-00-99</a>
                </p>
                <p class="contact-us__link">
                    <span class="icon-round icon-round_white"><span class="ico ico_letter"></span></span>
                     <a href="mailto:emailname@gmail.com">emailname@gmail.com</a>
                </p>
            </div>
            <div class="contact-us__form">
                <form action method="POST">
                    <div class="layout-2-column contact-us__line">
                        <input type="text" name="name" placeholder="Your name"/>
                        <input type="email" name="email" placeholder="Your email"/>
                    </div>
                    <textarea name="question" placeholder="What do you want to ask?"
                        class="contact-us__line"></textarea>
                    <div class="contact-us__button">
                        <button type="submit" class="button button_colored">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactUs;