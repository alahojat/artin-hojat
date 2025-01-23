import artinhojat from "/artin-hojat-2.jpg";
import artinhojat3 from "/artin-hojat-3.jpg";
import snoh from "/snoh.jpg";
import { workExperienceData } from "../data/WorkExperienceData.tsx";
import { educationData } from "../data/EducationData.tsx";
import { journalisticData } from "../data/JournalisticData.tsx";

export const MeritsPage = () => {
  const work = workExperienceData;
  const education = educationData;
  const journalism = journalisticData;
  return (
    <>
      <section className="w-full max-w-[1470px] flex-grow items-center bg-chalk sm:pb-16 md:mt-4 lg:pb-16">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          <figure className="text-right sm:hidden md:block">
            <img
              className="w-full object-cover md:h-80 lg:h-96"
              src={artinhojat}
              alt=""
            />
            <span className="photocred mr-2">Photo: Ala Hojat</span>
          </figure>
          <figure className="text-right sm:hidden md:hidden lg:block">
            <img
              className="w-full object-cover sm:h-56 lg:h-96"
              src={snoh}
              alt=""
            />
            <span className="photocred mr-2">Photo: Kristian Riffo</span>
          </figure>
          <figure className="text-right">
            <img
              className="w-full object-cover sm:h-56 md:h-80 lg:h-96"
              src={artinhojat3}
              alt=""
            />
            <span className="photocred mr-2">Photo: Josefine Tolleman</span>
          </figure>
        </div>
        <div className="mx-4 my-4 grid grid-cols-1 gap-4 md:mx-6 lg:mx-8 lg:grid-cols-3">
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
