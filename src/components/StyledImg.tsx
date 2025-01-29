interface StyledImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  photocred?: string;
  figClassName?: string;
  imgClassName?: string;
  captionClassName?: string;
}

export const StyledImg = ({
  src = "",
  alt = "Image",
  width = "",
  height = "",
  photocred = "",
  figClassName = "",
  imgClassName = "object-cover",
  captionClassName = "photocred mt-1 ml-2",
}: StyledImgProps) => {
  return (
    <figure className={`${figClassName}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full object-cover ${imgClassName}`}
      />
      {photocred && (
        <figcaption className={`${captionClassName}`}>
          Photo: {photocred}
        </figcaption>
      )}
    </figure>
  );
};
