import * as React from "react";
import LandingPageTemplate from "../templates/LandingPageTemplate";
import Card from "../molecules/common/Card";
import BlogCarousel from "../organisms/carousel/BlogCarousel";
import GetInTouch from "../organisms/common/GetAQuote";
import LottieAnimation from "../molecules/common/LottieAnimation";

import securityAnimation from "../../assets/animations/security.json"
import programmingAnimation from "../../assets/animations/programming.json"

import ContactModal from "../organisms/modals/ContactModal";
import Stack from "../organisms/Stack";
import CheckOutSourceCode from "../organisms/common/CheckOutSourceCode";
import {Projects} from "../organisms/projects/Projects";
import i18n from "../../i18n/i18n";

interface Props {
  articles
  projects
  companies
  stack
  menu
  contact,
  estimate
  estimateErrors
  estimateLoading
  estimateFormExpanded
  setEstimateEmail
  setEstimateCompany
  setEstimatePhone
  setEstimateContents
  setEstimateFormExpanded
  contactModalVisible
  openContactModal
  closeContactModal
  submitEstimateForm
  onBlogCarouselItemPressed
  toggleProjectsDrawerVisible
  projectsDrawerVisible
  stackRef
  blogRef
}

const LandingPage = (props: Props) => {
  return <LandingPageTemplate
    stackRef={props.stackRef}
    blogRef={props.blogRef}
    menu={props.menu}
    welcomeEngineer={
      <Card title={i18n.t("welcome.engineer.title")}>
        <h2>
          {i18n.t("welcome.engineer.ama")}
          <a href={props.contact?.linkedin}> {i18n.t('welcome.engineer.software-engineer')}</a>
        </h2>
        <h3>
          <p>{i18n.t("welcome.engineer.subtitle")}</p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Agile_software_development">
              {i18n.t("welcome.engineer.methodology")}
            </a>
          </p>
          <p><b>{i18n.t("welcome.engineer.what-i-do")}</b></p>
        </h3>
      </Card>
    }
    welcomeEngineerAnimation={
      <LottieAnimation
        width={364}
        animation={programmingAnimation}
      />
    }
    welcomeSecurity={
      <Card title={i18n.t("welcome.security.title")}>
        <h2>{i18n.t("welcome.security.subtitle")}</h2>
        <h3>
          <p>{i18n.t("welcome.security.trait")}</p>
          <p><b>{i18n.t("welcome.security.advantage")}</b></p>
        </h3>
      </Card>
    }
    welcomeSecurityAnimation={
      <LottieAnimation
        width={300}
        animation={securityAnimation}
      />
    }
    getInTouch={
      <GetInTouch
        onPress={props.openContactModal}
      />
    }
    checkOutSourceCode={
      <CheckOutSourceCode link={props.contact?.githubRepo} />
    }
    blogCarousel={
      props.articles && <BlogCarousel
        articles={props.articles}
        onItemPressed={props.onBlogCarouselItemPressed}
      />
    }
    stack={
      props.stack && <Stack stack={props.stack} />
    }
    getAnEstimateModal={
      <ContactModal
        contact={props.contact}
        estimate={props.estimate}
        estimateLoading={props.estimateLoading}
        estimateErrors={props.estimateErrors}
        submitEstimateForm={props.submitEstimateForm}
        setEstimateEmail={props.setEstimateEmail}
        setEstimateCompany={props.setEstimateCompany}
        setEstimatePhone={props.setEstimatePhone}
        setEstimateContents={props.setEstimateContents}
        setEstimateFormExpanded={props.setEstimateFormExpanded}
        estimateFormExpanded={props.estimateFormExpanded}
        onClose={props.closeContactModal}
        visible={props.contactModalVisible}
      />
    }
    projectsModal={
      <Projects
        visible={props.projectsDrawerVisible}
        toggle={props.toggleProjectsDrawerVisible}
        projects={props.projects}
        companies={props.companies}
      />
    }
  />;
}

export default LandingPage;