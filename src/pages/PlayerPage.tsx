import blueCourt from "../assets/edgar-chaparro.jpg";
import william from "../assets/william.png";
import melwin from "../assets/melwin-pantzar.png";
import elliot from "../assets/elliot.jpg";

export const PlayerPage = () => {
  return (
    <>
      <section className="bg-steel">
        <section className="relative">
          <img className="h-full w-full object-cover" src={blueCourt} alt="" />
          <section className="absolute inset-0 flex items-end p-4">
            <h2 className="subheader">Optimize your potential</h2>
          </section>
        </section>
        <section>
          <img src={william} alt="" />
        </section>
        <section>
          <img src={melwin} alt="" />
        </section>
        <section>
          <img src={elliot} alt="" />
        </section>
      </section>
    </>
  );
};
