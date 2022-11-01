import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { HeaderNav, HeroImg, MainBody, WorkCard, ContactInfo, Footer } from './components';
import { getAge } from './helpers';

const brandIcon = './images/icon_192x192.png';
const brandBanner = './images/icon_banner_1280x640.png';

const App = () => (
  <>
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
            title="JDA Utilities"
            placement="right"
            link="https://github.com/jagrosh/jda-utilities"
            img="./images/jda_banner_1280x640.png"
            size="medium"
          />
        </WorkCard.Row>
      </MainBody.Section>
      <MainBody.Section id="contact" label="Contact">
        <ContactInfo>
          <ContactInfo.Item href="tel:18477510988" color="secondary" label="847-751-0988">
            <FontAwesomeIcon icon={solid('phone')} />
          </ContactInfo.Item>
          <ContactInfo.Item href="mailto:kaidangustave@yahoo.com" newTab={true} color="secondary" label="E-Mail">
            <FontAwesomeIcon icon={regular('envelope')} />
          </ContactInfo.Item>
          <ContactInfo.Item href="https://twitter.com/Shengaero" newTab={true} color="secondary" label="Twitter">
            <FontAwesomeIcon icon={brands('twitter')} />
          </ContactInfo.Item>
          <ContactInfo.Item href="https://github.com/Shengaero" newTab={true} color="secondary" label="GitHub">
            <FontAwesomeIcon icon={brands('github')} />
          </ContactInfo.Item>
          <ContactInfo.Item href="https://discord.com/channels/@me" newTab={true} color="secondary" label="Discord">
            <FontAwesomeIcon icon={brands('discord')} />
          </ContactInfo.Item>
        </ContactInfo>
      </MainBody.Section>
    </MainBody>

    <Footer
      name="Kaidan Gustave"
      license="https://github.com/Shengaero/shengaero.github.io/blob/main/LICENSE"
    />
  </>
);

export default App;
