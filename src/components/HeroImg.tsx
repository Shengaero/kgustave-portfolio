const HeroImg = (props: { src: string | URL; }) => (
  <img className="hero-img" src={props.src.toString()} alt="/" />
);

export default HeroImg;
