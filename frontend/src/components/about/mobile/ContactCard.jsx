import { Link } from "react-router-dom";
import { links } from "../../../services/data";
import MessageSvg from "../../svg/about/MessageSvg";
import LinkedInSvg from "../../svg/about/LinkedInSvg";
import GithubSvg from "../../svg/about/GithubSvg";

export default function ContactCard() {
  return (
    <section className="flex h-1/4 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-slate-100 bg-mustard-0 px-4 py-6 text-yellow-950">
      <div className="text-center font-bold">
        <h1 className="text-base opacity-60">Don't be shy,</h1>
        <h3 className="-mt-1 text-xl">say hi !</h3>
      </div>
      <div className="flex gap-2 text-yellow-950">
        <a
          href={links[0]?.github}
          aria-label="github link"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:scale-125 hover:text-slate-100"
        >
          <GithubSvg />
        </a>
        <a
          href={links[0]?.linkedin}
          aria-label="linkedin link"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:scale-125 hover:text-slate-100"
        >
          <LinkedInSvg />
        </a>
        <Link
          to="/contact"
          className="transition-all hover:scale-125 hover:text-slate-100"
        >
          <MessageSvg />
        </Link>
      </div>
    </section>
  );
}
