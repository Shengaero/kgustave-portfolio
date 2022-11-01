import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { brands, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Container, Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const formatLinkedIn = (linkedIn: string) => {
  const [firstName, lastName] = linkedIn.split('-').slice(0, 2);
  return firstName.replace(firstName[0], firstName[0].toUpperCase())
    .concat(' ', lastName.replace(lastName[0], lastName[0].toUpperCase()));
};

const Heart = () => (<FontAwesomeIcon icon={solid('heart')} className="heart" />);

type CreditLinkProps = React.PropsWithChildren & {
  href: string | URL;
  icon: IconProp;
};

const CreditLink = (props: CreditLinkProps) => (
  <span className="position-relative">
    <a target="_blank" rel="noreferrer" href={props.href.toString()} className="credit-link stretched-link">
      {props.children}
    </a>
    <FontAwesomeIcon className="ms-1" icon={props.icon} />
  </span>
);

const NodeJsLink = () => (
  <CreditLink href="https://nodejs.org/" icon={brands('node-js')}>
    Node.js
  </CreditLink>
);

const ReactJsLink = () => (
  <CreditLink href="https://reactjs.org/" icon={brands('react')}>
    React.js
  </CreditLink>
);

type CopyrightProps = {
  license: string;
  name: string;
};

const Copyright = (props: CopyrightProps) => (
  <span className="position-relative">
    <FontAwesomeIcon icon={solid('copyright')} />{` ${new Date().getFullYear()} `}
    <a target="_blank" rel="noreferrer" href={props.license} className="credit-link stretched-link">
      {props.name}
    </a>
  </span>
);

type SocialNavProps = {
  phone: string;
  email: string;
  twitter: string;
  github: string;
  linkedIn: string;
  discord: {
    username: string;
    discriminator: number;
  };
};

const SocialNav = (props: SocialNavProps) => (
  <Nav as="ol" className="mb-4 social-nav">
    <NavItem href={`tel:${props.phone.replace('-', '')}`} label={props.phone}>
      <FontAwesomeIcon icon={solid('phone')} />
    </NavItem>
    <NavItem href={`mailto:${props.email}`} newTab={true} label={props.email}>
      <FontAwesomeIcon icon={regular('envelope')} />
    </NavItem>
    <NavItem href={`https://linkedin.com/in/${props.linkedIn}/`} newTab={true} label={formatLinkedIn(props.linkedIn)}>
      <FontAwesomeIcon icon={brands('linkedin')} />
    </NavItem>
    <NavItem href={`https://github.com/${props.github}`} newTab={true} label={props.github}>
      <FontAwesomeIcon icon={brands('github')} />
    </NavItem>
    <NavItem href={`https://twitter.com/${props.twitter}`} newTab={true} label={`@${props.twitter}`}>
      <FontAwesomeIcon icon={brands('twitter')} />
    </NavItem>
    <NavItem href="https://discord.com/channels/@me" newTab={true} label={`@${props.discord.username}#${props.discord.discriminator}`}>
      <FontAwesomeIcon icon={brands('discord')} />
    </NavItem>
  </Nav>
);

type SocialFooterProps = CopyrightProps & SocialNavProps;

export default function SocialFooter(props: SocialFooterProps) {
  return (
    <Container fluid as="footer" className="social-footer">
      <SocialNav {...props} />
      <div className="d-flex flex-column align-items-center">
        <span className="fs-5 text-center"><Heart /> Powered by <NodeJsLink /> and <ReactJsLink /></span>
        <Copyright {...props} />
      </div>
    </Container>
  );
};
