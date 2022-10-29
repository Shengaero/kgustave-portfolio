const HeroImg = (props: { src: string | URL }) => (
  <img src={props.src.toString()} alt="/" className="hero-img" />
);

export default HeroImg;
