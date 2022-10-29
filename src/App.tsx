import React from 'react';
import { HeaderNav, HeroImg, MainBody, WorkCard } from './components';
import { getAge } from './helpers';

import brandIcon from './images/icon.svg';

const App = () => (
  <React.StrictMode>
    <HeaderNav brand={{ name: 'Kaidan Gustave', img: brandIcon }}>
      <HeaderNav.Item href="#about-me" label="About Me" />
      <HeaderNav.Item href="#work" label="Work" />
    </HeaderNav>
    <HeroImg src="./images/dog.webp" />
    <MainBody>
      <MainBody.Section id="about-me" label="About Me">
        <p className="mb-2">
          My name is Kaidan Gustave
        </p>
        <p className="mb-0">
          I am {getAge()} years old and have been programming since senior year of high school.
        </p>
      </MainBody.Section>
      <MainBody.Section id="work" label="Work" className="flex-column">
        <WorkCard.Row className='my-sm-2'>
          <WorkCard
            title="Example"
            placement="center"
            link="https://github.com/shengaero"
            img="./images/dog.webp"
            size="large"
          />
        </WorkCard.Row>
        <WorkCard.Row className="my-sm-2">
          <WorkCard
            title="Another Example"
            placement="left"
            link="https://github.com/shengaero"
            img="./images/dog.webp"
            size="medium"
          />
          <WorkCard
            title="Another Example"
            placement="right"
            link="https://github.com/shengaero"
            img="./images/dog.webp"
            size="medium"
          />
        </WorkCard.Row>
        <WorkCard.Row className="my-sm-2">
          <WorkCard
            title="Another Example"
            placement="left"
            link="https://github.com/shengaero"
            img="./images/dog.webp"
            size="medium"
          />
          <WorkCard
            title="Another Example"
            placement="right"
            link="https://github.com/shengaero"
            img="./images/dog.webp"
            size="medium"
          />
        </WorkCard.Row>
      </MainBody.Section>
    </MainBody>
  </React.StrictMode>
);

export default App;
