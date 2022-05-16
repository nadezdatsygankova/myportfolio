import educationData from '../assets/data.json';

function Education() {
  return (
    <section className="education">
      <div className="wrapper">
        <h2 className="education__title">Education</h2>
        <p className="education__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. lorem ipsum
        </p>
        <div className="layout-1-column strategy-wrapper">
          {educationData.map((items, i) => (
            <article key={items.id} className="layout-2-column education">
              <div>
                <img className="logo-uni" src={items.imageUrl} alt= "logo university"/>
                <h4>{items.title}</h4>
                <h5>Student</h5>
                <p> {items.date}</p>
              </div>
              <div>
                <h4>{items.program} </h4>
                <p>{`${items.description}. `}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
