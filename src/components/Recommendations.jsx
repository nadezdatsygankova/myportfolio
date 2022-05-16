function Recommendations() {
  return (
    <section className="about-us">
      <div className="wrapper">
        <h2 className="about-us__title">Recommendations</h2>
        <p className="about-us__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. lorem ipsum.
        </p>
        <div className="layout-3-column employee-container">
          <div className="employee block-shadowed">
            <div className="employee__content">
              <h5 className="employee__name">Kathy Rosenberg</h5>
              <p className="employee__title">Product Manager</p>
            </div>
            <img
              className="employee__photo"
              src="./src/img/employees/kathy.png"
              alt="Kathy Rosenberg"
            />
          </div>
          <div className="employee block-shadowed">
            <div className="employee__content">
              <h5 className="employee__name">Alexandra Boyarskaya</h5>
              <p className="employee__title">Support Marketing Specialist</p>
            </div>
            <img
              className="employee__photo"
              src="./src/img/employees/alexandra.png"
              alt="Alexandra Boyarskaya"
            />
          </div>
          <div className="employee block-shadowed">
            <div className="employee__content">
              <h5 className="employee__name">Melani Amini</h5>
              <p className="employee__title">Photographer</p>
            </div>
            <img
              className="employee__photo"
              src="./src/img/employees/melani.png"
              alt="Melani Amini"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Recommendations;