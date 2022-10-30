import React from 'react';
import { HeaderNav, HeroImg, MainBody, WorkCard, ContactInfo, Footer } from './components';
import { getAge } from './helpers';

import brandIcon from './images/icon.svg';

const brandBanner = './images/icon_banner.png';

const App = () => (
  <React.StrictMode>
    <HeaderNav brand={{ name: 'Kaidan Gustave', img: brandIcon }}>
      <HeaderNav.Item href="#about-me" color="primary" label="About Me" />
      <HeaderNav.Item href="#work" color="primary" label="Work" />
      <HeaderNav.Item href="#contact" color="primary" label="Contact" />
    </HeaderNav>
    <HeroImg src={brandBanner} />
    <MainBody>
      <MainBody.Section id="about-me" label="About Me">
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
      <MainBody.Section id="work" label="Work" className="flex-column work-content">
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
            title="Another Example"
            placement="right"
            link="https://github.com/shengaero"
            img={brandBanner}
            size="medium"
          />
        </WorkCard.Row>
      </MainBody.Section>
      <MainBody.Section id="contact" label="Contact">
        <ContactInfo>
          <ContactInfo.Item href="/" color="secondary" label="E-Mail">
          </ContactInfo.Item>
          <ContactInfo.Item href="/" color="secondary" label="Test 2" />
          <ContactInfo.Item href="/" color="secondary" label="Test 3" />
          <ContactInfo.Item href="/" color="secondary" label="Test 4" />
        </ContactInfo>
      </MainBody.Section>
    </MainBody>
    <Footer name="Kaidan Gustave" />
  </React.StrictMode>
);

export default App;
