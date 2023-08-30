function Image({ imgSrc, className }) {
  return <img className={className} src={imgSrc} alt={imgSrc} />;
}

export default Image;
