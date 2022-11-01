import React from 'react';
import { /* Col, */ Container } from 'react-bootstrap';

type MainBodyProps = React.PropsWithChildren & { className?: string; };
type MainBodySectionProps = React.PropsWithChildren & {
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
  const { label, /* headerAlign, */ className, children } = props;
  // const headerClassName = 'text-center fs-2 my-auto';
  // const contentClassName = 'd-flex py-2 flex-column'.concat(className ? ` ${className}` : '');
  // return (
  //   <section className="d-flex flex-column flex-lg-row m-2 mx-sm-4">
  //     <Col as="h1" xs="auto" lg="1" className={headerClassName}>{label}</Col>
  //     <div className="vr mx-lg-4 my-lg-1" />
  //     <Col as="div" className={contentClassName}>{children}</Col>
  //   </section>
  // );
  return (
    <div className="d-flex flex-column m-2 mx-sm-4">
      <h1 className={'text-center fs-2 my-auto'}>{label}</h1>
      <div className={'d-flex py-2 flex-column'.concat(className ? ` ${className}` : '')}>
        {children}
      </div>
    </div>
  );
};
