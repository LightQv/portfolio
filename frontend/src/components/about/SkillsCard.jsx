import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { skills } from "../../services/data";

export default function SkillsCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <section className="items-left flex flex-col justify-center gap-2 rounded-2xl bg-gray-100 p-6 lg:h-full lg:justify-between">
        <h3 className="text-xl font-bold text-mustard-0 lg:text-2xl">
          {skills[0].title}
        </h3>
        <div className="flex w-full justify-between lg:flex-col lg:gap-1">
          {skills[0].types.map((type) => (
            <div key={type.type_id}>
              <h5 className="mb-1 font-semibold">{type.category}</h5>
              <ul>
                {type.content.map((item) => (
                  <li key={item} className="text-xs italic">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => handleClick()}
          className="mt-3 w-fit self-end rounded-lg bg-mustard-0 px-4 py-2 text-xs font-semibold text-gray-100 transition-all hover:scale-105 hover:bg-yellow-600"
        >
          {skills[1].title}
        </button>
      </section>

      <section className="items-left flex flex-col justify-center gap-2 rounded-2xl bg-gray-100 p-6 lg:h-full lg:justify-between">
        <h3 className="text-xl font-bold text-mustard-0 lg:text-2xl">
          {skills[1].title}
        </h3>
        <div className="flex w-full justify-between lg:flex-col lg:gap-1">
          {skills[1].types.map((type) => (
            <div key={type.type_id}>
              <h5 className="mb-1 font-semibold">{type.category}</h5>
              <ul>
                {type.content.map((item) => (
                  <li key={item} className="text-xs italic">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => handleClick()}
          className="mt-3 w-fit self-end rounded-lg bg-mustard-0 px-4 py-2 text-xs font-semibold text-gray-100 transition-all hover:scale-105 hover:bg-yellow-600"
        >
          {skills[0].title}
        </button>
      </section>
    </ReactCardFlip>
  );
}
