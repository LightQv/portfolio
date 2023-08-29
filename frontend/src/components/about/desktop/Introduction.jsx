import { Link } from "react-router-dom";
import { links } from "../../../services/data";
import ArrowRight from "../../svg/about/ArrowRight";

export default function Introduction() {
  return (
    <div className="text-yellow-950">
      <div className="text-7xl font-bold">
        <h3 className="">I'm Vivian,</h3>
        <h3 className="opacity-60">a Web Developer.</h3>
      </div>
      <p className="mt-3 text-xl font-semibold">
        Former <span className="underline underline-offset-8">UX/UI</span> and{" "}
        <span className="underline underline-offset-8">Graphic Designer</span> ,
        who felt in love with{" "}
        <span className="underline underline-offset-8">React</span> and{" "}
        <span className="underline underline-offset-8">Tailwind</span>.
      </p>
      <p className="mt-2 text-xl font-semibold">
        I enjoy <span className="underline underline-offset-8">climbing</span>{" "}
        and reading <span className="underline underline-offset-8">sci-fy</span>{" "}
        novels.
      </p>
      <div className="mt-8 flex items-center gap-2 text-base font-medium italic">
        <a
          href={links[0]?.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 flex w-fit items-center gap-2 rounded-md border-2 border-slate-100 px-4 py-2 text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
        >
          <p>View my resume</p>
          <ArrowRight />
        </a>
        <p>or</p>
        <Link
          to="/projects"
          className="ml-1 flex w-fit items-center gap-2 rounded-md border-2 border-slate-100 px-4 py-2 text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
        >
          <p>Check out my work !</p> <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
