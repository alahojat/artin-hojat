import artinhojat from "../assets/artin-hojat-2.jpg";

export const AboutPage = () => {
  return (
    <>
      <section className="base bg-ice">
        <h2 className="subheading">About me</h2>
        <p className="body">
          My mission is to empower individuals in the industry and public
          domains with the knowledge and tools to pursue their performance goals
          and to enjoy good health, to their utmost abilities. I try to reach
          this through education, pragmatic and effective approaches.
        </p>
        <p className="body">
          There is a special and cultured group of individuals who happen to be
          passionate about a number of domains that you would think have nothing
          to do with each other. I mean, sports such as basketball, Japanese
          cartoons and storytelling, hip-hop music, fitness and Reddit shouldn’t
          correlate? But somehow these domains do, and the simple answer is that
          this is what spoke to millions of individuals. I happen to be one of
          them. And I take great joy in it. It gives the knowledge and happiness
          you’re gathering a special meaning.
        </p>

        <section>
          <h1>SPOTIFY WIDGET</h1>
          <img src={artinhojat} alt="" />
        </section>
      </section>
    </>
  );
};
