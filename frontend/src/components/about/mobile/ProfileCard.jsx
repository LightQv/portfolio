import { Link } from "react-router-dom";
import profileImg from "../../../assets/image/profile-smile.jpg";
import { links } from "../../../services/data";
import ArrowRight from "../../svg/about/ArrowRight";

export default function ProfileCard() {
  return (
    <section className="mt-2 flex h-3/4 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-slate-100 bg-mustard-0 px-4 py-6 text-yellow-950">
      <img
        src={profileImg}
        alt="profile-pic"
        className="h-44 w-44 rounded-full"
      />
      <div className="text-center">
        <h1 className="text-xl font-bold">
          I'm Vivian, <span className="opacity-60">a Web Developer.</span>
        </h1>
        <p className="mt-2 text-sm font-semibold">
          Former <span className="underline underline-offset-4">UX/UI</span> and{" "}
          <span className="underline underline-offset-4">Graphic Designer</span>{" "}
          , who felt in love with{" "}
          <span className="underline underline-offset-4">React</span> and{" "}
          <span className="underline underline-offset-4">Tailwind</span>.
        </p>
        <p className="mt-1 text-sm font-semibold">
          I enjoy <span className="underline underline-offset-4">climbing</span>{" "}
          and reading{" "}
          <span className="underline underline-offset-4">sci-fy</span> novels.
        </p>
      </div>
      <div className="mt-2 flex items-center gap-1 text-xs font-semibold italic">
        <a
          href={links[0]?.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 flex h-full w-1/2 items-center gap-1 rounded-md border-2 border-slate-100 px-4 py-2 text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
        >
          <p>View my resume</p>
          <ArrowRight />
        </a>
        <p>or</p>
        <Link
          to="/projects"
          className="ml-1 flex h-full w-1/2 items-center gap-1 rounded-md border-2 border-slate-100 px-4 py-2 text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
        >
          <p>Check out my work !</p> <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
