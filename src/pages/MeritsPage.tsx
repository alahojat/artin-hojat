import artinhojat from "/artin-hojat-2.jpg";
import skurubasket from "/skuru-basket.jpeg";
import snoh from "/snoh.jpg";
import { workExperienceData } from "../data/WorkExperienceData.tsx";
import { educationData } from "../data/EducationData.tsx";
import { journalisticData } from "../data/JournalisticData.tsx";
import { StyledImg } from "../components/StyledImg.tsx";

export const MeritsPage = () => {
  const work = workExperienceData;
  const education = educationData;
  const journalism = journalisticData;
  return (
    <>
      <section className="base-img-top bg-snow">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          <StyledImg
            src={skurubasket}
            alt="fdsafds"
            photocred="Ala Hojat"
            figClassName="sm:hidden md:block"
            imgClassName="sm:h-56  object-[75%_25%] md:h-80 lg:h-96"
          ></StyledImg>
          <StyledImg
            src={snoh}
            alt="fdsafds"
            photocred="Kristian Riffo"
            figClassName="sm:hidden md:hidden lg:block"
            imgClassName="sm:h-56 md:h-80 lg:h-96"
          ></StyledImg>
          <StyledImg
            src={artinhojat}
            alt="fdsafds"
            photocred="Ala Hojat"
            imgClassName="sm:h-56 md:h-80 lg:h-96 "
          ></StyledImg>
        </div>
        <div className="m-4 grid grid-cols-1 gap-4 md:mx-6 lg:mx-8 lg:grid-cols-3">
          <article className="border-t border-solid border-steel pb-2">
            <h3 className="subheading-alt">Education</h3>
            {education.map((item) => (
              <div key={item.id} className="my-4 gap-2">
                <h4 className="body m-0"> {item.degree}</h4>
                <span className="body-alt">{item.institution}</span>
              </div>
            ))}
          </article>
          <article className="border-t border-solid border-steel pb-2">
            <h3 className="subheading-alt">Expertise & roles</h3>
            {work.map((job) => (
              <div key={job.id} className="my-4">
                <h4 className="body m-0"> {job.title}</h4>
                <p className="body-alt">{job.company}</p>
                <span className="body-alt">{job.dates}</span>{" "}
                <span className="body-alt">{job.location}</span>
              </div>
            ))}
          </article>
          <article className="border-t border-solid border-steel pb-2">
            <h3 className="subheading-alt">Journalistic portfolio</h3>
            <div className="md:grid md:grid-cols-2">
              {journalism.map((item) => (
                <div key={item.id} className="mb-2">
                  <p className="body m-0"> {item.name}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
