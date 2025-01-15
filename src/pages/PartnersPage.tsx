import nocco from "/brand-logos/nocco.png";
import betteryou from "/brand-logos/betteryou-logo.webp";
import flowlife from "/brand-logos/flowlife.avif";
import elliot from "/brand-logos/elliot-cadeau.png";
import bandai from "/brand-logos/bandai-namco.svg";
import comicCon from "/brand-logos/comic-con.png";
import nba from "/brand-logos/nba.png";
import sats from "/brand-logos/sats.png";
import kingsize from "/brand-logos/kingsize.svg";
import nojesguiden from "/brand-logos/nojesguiden.png";

export const PartnersPage = () => {
  return (
    <>
      <section className="base bg-chalk">
        <div>
          <h2 className="subheading">Partners</h2>
        </div>

        <section className="grid grid-cols-2 lg:grid-cols-5">
          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://nocco.com/sv/">
              <img src={nocco} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://www.betteryou.se/">
              <img src={betteryou} alt="" width="90px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://www.flowlife.com/se/">
              <img src={flowlife} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://www.elliotcadeau.com/">
              <img src={elliot} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://www.sats.se/gym/ursvik">
              <img src={sats} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://en.bandainamcoent.eu/">
              <img src={bandai} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://nba.2k.com/">
              <img src={nba} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://www.comicconstockholm.se/en/">
              <img src={comicCon} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://www.kingsizemag.se/">
              <img src={kingsize} alt="" width="80px" />
            </a>
          </article>

          <article className="row m-2 items-center justify-center gap-4">
            <a href="https://ng.se/stockholm">
              <img src={nojesguiden} alt="" width="80px" />
            </a>
          </article>
        </section>
      </section>
    </>
  );
};
