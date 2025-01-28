import { SpotifyEmbed } from "../components/SpotifyEmbed";
import { StyledImg } from "../components/StyledImg";
import artinhojat3 from "/artin-hojat-3.jpg";

export const AboutPage = () => {
  return (
    <>
      <div className="base-container bg-ice">
        <section className="base-img-top">
          <StyledImg
            src={artinhojat3}
            alt=""
            width="300"
            height="225"
            imgClassName="w-96 sm:h-44 md:h-96 lg:h-96 lg:object-[75%_25%]"
            photocred="Josefine Tolleman"
          ></StyledImg>
          <div className="mx-4 grid md:gap-6 lg:grid-cols-3">
            <div className="my-4 lg:col-span-2 lg:mx-4">
              <p className="body">
                I work with individuals towards maximizing their potential in
                their profession through leveraging physical activity,
                psychology, behavioural medicine, nutrition, work strategies and
                dosing. A comprehensive approach for health and work
                performance.
              </p>
              <p className="body">
                What empowers me to perform and work in these areas are 10 years
                of academic merits across Karolinska Institutet and Stockholm
                University. To add to that, over accumulated 16 years of work
                experience ranging from journalistic writing, to project leading
                and developing basketball organizations, to individual coaching
                of athletes on a professional level.
              </p>
              <p className="body">
                My mission is to empower individuals in the industry and public
                domains with the knowledge and tools to pursue their performance
                goals and to enjoy good health, to their utmost abilities. I try
                to reach this through education, pragmatic and effective
                approaches.
              </p>
              <p className="body">
                There is a special and cultured group of individuals who happen
                to be passionate about a number of domains that you would think
                have nothing to do with each other. I mean, sports such as
                basketball, Japanese cartoons and storytelling, hip-hop music,
                fitness and Reddit shouldn’t correlate? But somehow these
                domains do, and the simple answer is that this is what spoke to
                millions of individuals. I happen to be one of them. And this is
                where my professional background meets passion and culture.
              </p>
              <p className="body">
                I take great joy in it. It gives the knowledge you’re gathering
                and distributing a very special meaning.
              </p>
            </div>
            <section className="my-4 flex flex-col lg:col-span-1">
              <h3 className="subheading mb-4">Join the conversation</h3>
              <SpotifyEmbed />
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
