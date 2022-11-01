// import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

type ContactFormProps = {
  title: string;
  show: boolean;
  handleClose: () => void;
};

type ContactFormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  fieldType?: 'input' | 'textarea';
  type?: string;
  controlClassName?: string;
  labelClassName?: string;
};

const ContactFormField = (props: ContactFormFieldProps) => (
  <Form.Floating as="li" className="mb-2">
    <Form.Control as={props.fieldType || 'input'}
      id={props.id}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      className={props.controlClassName}
    />
    <Form.Label htmlFor={props.id} className={props.labelClassName}>
      {props.label}
    </Form.Label>
  </Form.Floating>
);

export default function ContactForm(props: ContactFormProps) {
  return (
    <>
      <Form className="modal-form rounded-3">
        <Modal.Header>
          <Modal.Title as="h3">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body as="ol" className="mb-0">
          <ContactFormField id="contactFormName" placeholder="John Smith" label="Name" />
          <ContactFormField id="contactFormEmail" type="email" placeholder="johnsmith@mail.com" label="E-Mail" />
          <ContactFormField fieldType="textarea" controlClassName="modal-form-message"
            id="contactFormMessage" placeholder="Your message here..." label="Message" />
        </Modal.Body>

        <Modal.Footer as="footer">
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          {/* TODO: submit functionality */}
          <Button disabled type="submit" onClick={props.handleClose}>Submit</Button>
        </Modal.Footer>
      </Form>
    </>
  );
}
