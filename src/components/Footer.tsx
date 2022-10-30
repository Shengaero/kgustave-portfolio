import React from 'react';

type FooterProps = React.PropsWithChildren & { name: string; }

const Footer = (props: FooterProps) => (
  <footer>
    <span className="fs-4">Page made in React.js by {props.name}</span>
    <p>&copy; {new Date().getFullYear()} {props.name}</p>
  </footer>
);

export default Footer;
