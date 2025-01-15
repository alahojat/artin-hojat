export const Hero = ({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <section className="hero" onClick={onDismiss}>
      <h1 className="header">Hero</h1>
    </section>
  );
};
