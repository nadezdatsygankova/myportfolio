import Service from './Service'


function Services(){
  return (
    <section class="my-services" id="services">
    <h2 class="section__title section__title--services">What I do</h2>
    <div class="services">
        <Service />
        <Service />
        <Service />
    </div>
    <a href="#work" class="btn">My Work</a>
</section>
  )
}

export default Services;