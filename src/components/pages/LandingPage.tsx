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
      <Card title="Hello.">
        <h2>I am a <a href={props.contact?.linkedin}>software engineer ⚙.</a></h2>
        <h3>
          I love to make things happen by using modern technologies.<br />
          From profound analysis and design, through implementation, to maintenance.<br />
          <b>I produce custom software to suit your needs and help to build your business, making your investment grow.</b>
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
      <Card title="Security.">
        <h2>I ensure secure solutions.</h2>
        <h3>
          As you may know, security is one of the most crucial fundamentals of a running business.<br />
          <b>With best coding practices, analysis, and penetration testing services,
            your data will be secure in cyberspace.</b>
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