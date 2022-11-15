import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderNav, HeroImg, MainBody, WorkCard, SocialFooter } from './components';
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
        title="Glimpse"
        placement="center"
        link="https://github.com/shengaero/glimpse"
        img="./images/glimpse_banner_1280x640.png"
        size="large"
      />
    </WorkCard.Row>
    <WorkCard.Row className="my-sm-2">
      <WorkCard
        title="JDA Utilities"
        placement="left"
        link="https://github.com/jagrosh/jda-utilities"
        img="./images/jda_banner_1280x640.png"
        size="medium"
      />
      <WorkCard
        title="shengaero.github.io"
        placement="right"
        link="https://github.com/shengaero/shengaero.github.io"
        img={brandBanner}
        size="medium"
      />
    </WorkCard.Row>
  </MainBody.Section>
);

export default function App() {
  // State setup for contact form modal controls
  return (
    <>
      {/* Header navbar present on all pages */}
      <HeaderNav brand={{ name: 'Kaidan Gustave', img: brandIcon }}>
        <HeaderNav.Item type="link" href="/" color="primary" label="About Me" />
        <HeaderNav.Item type="link" href="/work" color="primary" label="Work" />
        <HeaderNav.Item type="link" href="mailto:kaidangustave@yahoo.com" color="primary" label="Contact" />
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
            {/* 404 */}
            <Route path="/*" element={<div>Uh oh. Nothing's here!</div>} />
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
