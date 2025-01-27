export const SpotifyEmbed = () => {
  const iframeSrc = `https://open.spotify.com/embed/show/5JTNlIk5jpGpZf0Ri6b84N?theme=0`;

  return (
    <div>
      <iframe
        src={iframeSrc}
        width="95%"
        height="200"
        allow="encrypted-media"
        title="Spotify Show Player"
        loading="lazy"
        className="max-w-[500px]"
      ></iframe>
    </div>
  );
};
