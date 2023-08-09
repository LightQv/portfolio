import { experiences } from "../../services/data";

export default function ExperienceCard() {
  return (
    <section className="items-left flex flex-col justify-center gap-2 rounded-2xl bg-gray-100 p-6 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:justify-between">
      <h3 className="text-xl font-bold text-mustard-0 lg:text-2xl">
        Experience
      </h3>
      <div className="-mt-1 flex w-full flex-col justify-between gap-4 lg:gap-9">
        {experiences.map((experience) => (
          <div key={experience.xp_id}>
            <h5 className="mb-1 font-semibold">{experience.title}</h5>
            <ul className="-mt-1 flex flex-col gap-1">
              {experience.references.map((reference) => (
                <li key={reference.ref_id}>
                  <h5 className="line-clamp-1 text-sm font-semibold text-gray-500">
                    {reference.name}
                  </h5>
                  <p className="text-xs italic">{reference.description}</p>
                </li>
              ))}
            </ul>
            {experience.location && (
              <h6 className="mt-2 text-xs font-semibold">
                {experience.location} - {experience.duration}
              </h6>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
