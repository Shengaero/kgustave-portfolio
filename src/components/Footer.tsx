import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Heart = () => (
  <FontAwesomeIcon icon={solid('heart')} className="heart" />
);

const NodeJsLink = () => (
  <span className="position-relative">
    <a target="_blank" rel="noreferrer" href="https://nodejs.org/" className="credit-link stretched-link">
      Node.js
    </a>
    <FontAwesomeIcon className="ms-1" icon={brands('node-js')} />
  </span>
);

const ReactJsLink = () => (
  <span className="position-relative">
    <a target="_blank" rel="noreferrer" href="https://reactjs.org/" className="credit-link stretched-link">
      React.js
    </a>
    <FontAwesomeIcon className="ms-1" icon={brands('react')} />
  </span>
);

type FooterProps = React.PropsWithChildren & {
  name: string;
  license: string;
};

const Footer = (props: FooterProps) => (
  <footer className="d-flex flex-column align-items-center">
    <span className="fs-5"><Heart /> Powered by <NodeJsLink /> and <ReactJsLink /></span>
    <span className="position-relative">
      <FontAwesomeIcon icon={solid('copyright')} />
      {` ${new Date().getFullYear()} `}
      <a target="_blank" rel="noreferrer" href={props.license} className="credit-link stretched-link">
        {props.name}
      </a>
    </span>
  </footer>
);

export default Footer;
