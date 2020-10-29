import * as React from "react";
import "../../assets/styles/templates/landing-page.scss"
import MainLayout from "../layouts/MainLayout";


export default (props) => {
  const {
    projectsModal,
    welcomeEngineer,
    welcomeSecurity,
    welcomeEngineerAnimation,
    welcomeSecurityAnimation,
    getInTouch,
    stack,
    getAnEstimateModal,
    checkOutSourceCode,
    blogCarousel,
    menu,
    blogRef,
    stackRef
  } = props

  return <MainLayout menu={menu}>
    <div className="landing-page-template">
      <section id="landing-tiles" className="landing-tiles">
        <div className="welcome-engineer">
          <div className="left">
            {welcomeEngineer}
          </div>
          <div className="right">
            {welcomeEngineerAnimation}
          </div>
        </div>
        <div className="welcome-security">
          <div className="left">
            {welcomeSecurityAnimation}
          </div>
          <div className="right">
            {welcomeSecurity}
          </div>
        </div>
      </section>
      <section className="get-a-quote-above-blog">
        {getInTouch}
      </section>
      <section ref={blogRef} className="blog-carousel-under-get-a-quote">
        {blogCarousel}
      </section>
      <section className="check-out-source-code-section">
        {checkOutSourceCode}
      </section>
      <section ref={stackRef} className="stack-container">
        {stack}
      </section>
      {getAnEstimateModal}
      {projectsModal}
    </div>
  </MainLayout>
}
