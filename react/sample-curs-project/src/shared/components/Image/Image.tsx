type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

interface ImageProps extends ImgProps {
  src: ImgProps["src"];
  alt: ImgProps["alt"];
  width: ImageProps["width"];
  height: ImageProps["height"];
}

const Image = ({src, alt, width, height, ...props}: ImageProps):  React.ReactElement => {
  return <img src={src} alt={alt} {...props} />
}

export default Image;
