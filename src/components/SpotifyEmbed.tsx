export const SpotifyEmbed = () => {
  const iframeSrc = `https://open.spotify.com/embed/show/5JTNlIk5jpGpZf0Ri6b84N?theme=0`;
  return (
    <div>
      <iframe
        src={iframeSrc}
        width="80%"
        height="400"
        sandbox="allow-scripts allow-same-origin"
        title="Spotify Show Player"
        loading="lazy"
        className="max-w-[500px]"
      ></iframe>
    </div>
  );
};
