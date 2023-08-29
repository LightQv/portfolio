import { Link, NavLink } from "react-router-dom";
import ProfileSvg from "./svg/navbar/ProfileSvg";
import ProjectsSvg from "./svg/navbar/ProjectsSvg";
import ContactSvg from "./svg/navbar/ContactSvg";

export default function NavBar() {
  return (
    <nav
      className="fixed
       left-0 top-0 z-20 flex h-16 w-screen items-center justify-between bg-mustard-0 px-8 font-roboto text-yellow-950"
    >
      <Link
        to="/"
        className="hidden
          font-semibold lg:block lg:text-2xl"
      >
        V.
      </Link>
      <ul className="flex h-fit w-full items-center justify-between gap-2 lg:w-1/5">
        <li className="h-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex cursor-default items-center gap-2 rounded-md bg-slate-100 px-14 py-1 transition-all"
                : "hover:text-slate-100"
            }
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <ProfileSvg />
                  <p className="text-base font-bold">About</p>
                </>
              ) : (
                <ProfileSvg />
              )
            }
          </NavLink>
        </li>
        <li className="h-full">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "flex cursor-default items-center gap-2 rounded-md bg-slate-100 px-14 py-1 transition-all"
                : "hover:text-slate-100"
            }
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <ProjectsSvg />
                  <p className="text-base font-bold">Projects</p>
                </>
              ) : (
                <ProjectsSvg />
              )
            }
          </NavLink>
        </li>
        <li className="h-full">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "flex cursor-default items-center gap-2 rounded-md bg-slate-100 px-14 py-1 transition-all"
                : "hover:text-slate-100"
            }
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <ContactSvg />
                  <p className="text-base font-bold">Contact</p>
                </>
              ) : (
                <ContactSvg />
              )
            }
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
