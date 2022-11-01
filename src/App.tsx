import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderNav, HeroImg, MainBody, WorkCard, SocialFooter, ContactForm } from './components';
import { getAge } from './helpers';

// various brand icons
const brandIcon = './images/icon_192x192.png';
const brandBanner = './images/icon_banner_1280x640.png';

// about me page (also index)
const AppAboutMeSection = () => (
  <MainBody.Section label="About Me">
    <p className="mb-2">
      My name is Kaidan Gustave.
      I am {getAge()} years old and have been programming since senior year of high school.
    </p>
    <p className="mb-0">
      I am a smart, passionate, forward thinking developer with a knack for backend web-services and web-applications as a whole.
      I am fluently versed in industry standard languages such as Java, Javascript, and Python. I am quick learner, making it easy
      for me to get involved with nearly any project, and work well in teams big and small.
    </p>
  </MainBody.Section>
);

// work page
const AppWorkSection = () => (
  <MainBody.Section label="Work" headerAlign="top" className="flex-column work-content">
    <WorkCard.Row className="my-sm-2">
      <WorkCard
        title="Example"
        placement="center"
        link="https://github.com/shengaero"
        img={brandBanner}
        size="large"
      />
    </WorkCard.Row>
    <WorkCard.Row className="my-sm-2">
      <WorkCard
        title="Another Example"
        placement="left"
        link="https://github.com/shengaero"
        img={brandBanner}
        size="medium"
      />
      <WorkCard
        title="Another Example"
        placement="right"
        link="https://github.com/shengaero"
        img={brandBanner}
        size="medium"
      />
    </WorkCard.Row>
    <WorkCard.Row className="my-sm-2">
      <WorkCard
        title="Another Example"
        placement="left"
        link="https://github.com/shengaero"
        img={brandBanner}
        size="medium"
      />
      <WorkCard
        title="JDA Utilities"
        placement="right"
        link="https://github.com/jagrosh/jda-utilities"
        img="./images/jda_banner_1280x640.png"
        size="medium"
      />
    </WorkCard.Row>
  </MainBody.Section>
);

export default function App() {
  // State setup for contact form modal controls
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      {/* Header navbar present on all pages */}
      <HeaderNav brand={{ name: 'Kaidan Gustave', img: brandIcon }}>
        <HeaderNav.Item type="link" href="/" color="primary" label="About Me" />
        <HeaderNav.Item type="link" href="/work" color="primary" label="Work" />
        <HeaderNav.Item type="modal" color="primary" label="Contact"
          modalClassName="contact-form"
          show={modalShow}
          handleClose={handleClose}
          handleShow={handleShow}>
          <ContactForm
            title="Contact"
            show={modalShow}
            handleClose={handleClose}
          />
        </HeaderNav.Item>
      </HeaderNav>

      <HeroImg src={brandBanner} />

      {/* The main body of the page will get rendered in differently depending on which route the request is hitting */}
      <MainBody>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {/* About Me Page (Main Landing Page) */}
            <Route index element={AppAboutMeSection()} />
            {/* Work Page */}
            <Route path="/work" element={AppWorkSection()} />
            {/* TODO: lead this default path to 404 */}
            <Route path="/*" element={<div>test</div>} />
          </Routes>
        </BrowserRouter>
      </MainBody>

      {/* Social media links and copyright information in the footer */}
      <SocialFooter
        name="Kaidan Gustave"
        phone="1-847-751-0988"
        email="kaidangustave@yahoo.com"
        twitter="Shengaero"
        github="Shengaero"
        linkedIn="kaidan-gustave-905257165"
        discord={{ username: 'Shengaero', discriminator: 9090 }}
        license="https://github.com/Shengaero/shengaero.github.io/blob/main/LICENSE"
      />
    </>
  );
};
