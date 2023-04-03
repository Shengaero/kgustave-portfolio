import { Card } from 'react-bootstrap';

type WorkCardProps = {
  title: string;
  size: 'medium' | 'large';
  placement: 'center' | 'left' | 'right';
  lightText?: boolean;
  link?: string;
  img?: string;
  className?: string;
  imgClassName?: string;
};

export default function WorkCard({ title, size, placement, link, img, className, imgClassName, lightText }: WorkCardProps) {
  const placementClasses = placement === 'left' ? ' me-sm-2' : placement === 'right' ? ' ms-sm-2' : '';
  return (
    <Card className={
      `card-${size} flex-fill my-1 my-sm-0`.concat(
        placementClasses,
        className ? ` ${className}` : ''
      )
    }>
      <Card.Img src={img} alt="/" className={imgClassName || ''} />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Link href={link || '/'} target="_blank" className="text-decoration-none stretched-link">
            <Card.Title className={lightText ? 'text-light' : undefined}>{title}</Card.Title>
          </Card.Link>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

type WorkCardRowProps = React.PropsWithChildren & { className: string; };

WorkCard.Row = (props: WorkCardRowProps) => (
  <div className={
    'd-flex flex-column flex-sm-row flex-nowrap'
      .concat(props.className ? ` ${props.className}` : '')
  }>
    {props.children}
  </div>
);
