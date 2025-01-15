import article from "../assets/article.jpg";
import { workExperienceData } from "../data/WorkExperienceData.tsx";
import { educationData } from "../data/EducationData.tsx";

export const MeritsPage = () => {
  const work = workExperienceData;
  const education = educationData;
  return (
    <>
      <section className="bas pt-0">
        <div className="relative">
          <h2 className="subheading subheading-light absolute top-16">
            Merits
          </h2>
          <img
            className="w-full object-cover sm:h-72 lg:h-[600px]"
            src={article}
            alt=""
          />
        </div>
        <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article>
            <h3 className="subheading-alt">Education</h3>
            {education.map((item) => (
              <div key={item.id} className="my-4 bg-chalk">
                <div className="relative">
                  <h4 className="subheading-alt"> {item.degree}</h4>
                  <h5>{item.institution}</h5>
                  <span>{item.dates}</span>
                  <span className="body-alt">{item.location}</span>
                  <p className="body">{item.description}</p>
                </div>
              </div>
            ))}
          </article>
          <article>
            <h3 className="subheading-alt">Credentials</h3>
            {work.map((job) => (
              <div key={job.id} className="my-4 bg-chalk">
                <div className="relative">
                  <h4 className="subheading-alt"> {job.title}</h4>
                  <span>{job.employmentType}</span> <span>{job.dates}</span>
                  <span className="body-alt">{job.location}</span>
                  <p className="body">{job.description}</p>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
};
