import { SpotifyEmbed } from "../components/SpotifyEmbed";
import { StyledImg } from "../components/StyledImg";
import skurubasket from "/skuru-basket.jpg";

export const AboutPage = () => {
  return (
    <>
      <section className="base-img-top bg-ice">
        <StyledImg
          src={skurubasket}
          alt=""
          imgClassName="w-96 h-56"
          photocred="Josefine Tolleman"
        ></StyledImg>
        <div className="mx-4 grid grid-cols-1">
          <p className="body">
            My mission is to empower individuals in the industry and public
            domains with the knowledge and tools to pursue their performance
            goals and to enjoy good health, to their utmost abilities. I try to
            reach this through education, pragmatic and effective approaches.
          </p>
          <p className="body">
            There is a special and cultured group of individuals who happen to
            be passionate about a number of domains that you would think have
            nothing to do with each other. I mean, sports such as basketball,
            Japanese cartoons and storytelling, hip-hop music, fitness and
            Reddit shouldn’t correlate? But somehow these domains do, and the
            simple answer is that this is what spoke to millions of individuals.
            I happen to be one of them. And I take great joy in it. It gives the
            knowledge and happiness you’re gathering a special meaning.
          </p>
        </div>
        <section className="mx-4">
          <SpotifyEmbed></SpotifyEmbed>
        </section>
        <div className="mx-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2"></div>
      </section>
    </>
  );
};
