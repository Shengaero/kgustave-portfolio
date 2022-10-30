import React from 'react';
import { Col, Container } from 'react-bootstrap';

type MainBodyProps = React.PropsWithChildren & { className?: string; };
type MainBodySectionProps = React.PropsWithChildren & {
  id: string;
  label: string;
  headerAlign?: 'top' | 'center';
  className?: string;
};

export default function MainBody({ children, className }: MainBodyProps) {
  return (
    <Container fluid as="main" className={!className ? 'py-2' : `${className} py-2`}>
      {children}
    </Container>
  );
};

MainBody.Section = function (props: MainBodySectionProps) {
  const { id, label, headerAlign, className, children } = props;
  const headerClassName = 'text-center fs-4 my-auto'
    .concat(headerAlign ? ' my-lg-2' : '');
  const contentClassName = 'd-flex py-2 flex-column'
    .concat(className ? ` ${className}` : '');
  return (
    <section id={id} className="d-flex flex-column flex-lg-row m-2 mx-sm-4">
      <Col as="h2" xs="auto" lg="1" className={headerClassName}>{label}</Col>
      <div className="vr mx-lg-4 my-lg-1" />
      <Col as="div" className={contentClassName}>{children}</Col>
    </section>
  );
};
