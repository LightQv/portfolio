import { educations } from "../../services/data";

export default function EducationCard() {
  return (
    <section className="items-left flex flex-col justify-center gap-2 rounded-2xl bg-gray-100 p-6 lg:col-start-5 lg:col-end-7 lg:row-start-2 lg:row-end-3 lg:justify-between">
      <h3 className="text-xl font-bold text-mustard-0 lg:text-2xl">
        Education
      </h3>
      <div className="-mt-1 flex w-full flex-col justify-between gap-4 lg:gap-4">
        {educations.map((education) => (
          <div key={education.edu_id}>
            <h5 className="mb-1 font-semibold">{education.title}</h5>
            <p className="text-xs italic">{education.description}</p>
            {education.location && (
              <h6 className="mt-2 text-xs font-semibold">
                {education.location} - {education.duration}
              </h6>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
