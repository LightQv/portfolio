import React from "react";
import { Link, useLocation } from "react-router-dom";
import GithubSvg from "./svg/about/GithubSvg";
import LinkedInSvg from "./svg/about/LinkedInSvg";
import MessageSvg from "./svg/about/MessageSvg";
import { links } from "../services/data";

export default function ContactBar() {
  const location = useLocation();

  return (
    <div className="absolute bottom-0 right-16 hidden items-center gap-2 text-yellow-950 lg:flex lg:flex-col">
      <div className="h-6 border-l-2 border-yellow-950" />
      <a
        href={links[0]?.github}
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-125 hover:text-slate-100"
      >
        <GithubSvg />
      </a>
      <div className="h-4 border-l-2 border-yellow-950" />
      <a
        href={links[0]?.linkedin}
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-125 hover:text-slate-100"
      >
        <LinkedInSvg />
      </a>
      <div
        className={`${
          location.pathname === "/contact" ? "lg:hidden" : ""
        } h-4 border-l-2 border-yellow-950`}
      />
      <Link
        to="/contact"
        className={`${
          location.pathname === "/contact" ? "lg:hidden" : ""
        } transition-all hover:scale-125 hover:text-slate-100`}
      >
        <MessageSvg />
      </Link>
      <div className="h-10 border-l-2 border-yellow-950" />
    </div>
  );
}
