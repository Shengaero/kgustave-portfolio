const HeroImg = (props: { src: string | URL; }) => (
  <div className="d-flex hero">
    <img className="m-auto hero-img" src={props.src.toString()} alt="/" />
  </div>
);

export default HeroImg;
