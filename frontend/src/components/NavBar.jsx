import { Link, NavLink, useLocation } from "react-router-dom";
import HomeSvg from "./svg/HomeSvg";
import ProfileSvg from "./svg/ProfileSvg";
import ProjectsSvg from "./svg/ProjectsSvg";
import ContactSvg from "./svg/ContactSvg";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav
      className={`${
        location.pathname === "/projects" ? "bg-mustard-0" : "bg-slate-50"
      } fixed left-0 top-0 z-20 flex h-16 w-screen items-center justify-between px-8 shadow-lg transition-all lg:shadow-none`}
    >
      <div className="hidden lg:block">
        <Link
          to="/"
          className={`${
            location.pathname === "/projects"
              ? "text-slate-50"
              : "text-mustard-0"
          } font-semibold lg:text-xl`}
        >
          Vivian.
        </Link>
      </div>
      <ul className="flex h-fit w-full items-center justify-between gap-2 lg:w-1/4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-2xl bg-mustard-0 px-14 py-1 transition-all"
                : `${
                    location.pathname === "/projects"
                      ? "text-yellow-950 transition-all hover:text-slate-100"
                      : "text-gray-500 transition-all hover:text-mustard-0"
                  }`
            }
          >
            <HomeSvg />
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-2xl bg-mustard-0 px-14 py-1 transition-all"
                : `${
                    location.pathname === "/projects"
                      ? "text-yellow-950 transition-all hover:text-slate-100"
                      : "text-gray-500 transition-all hover:text-mustard-0"
                  }`
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
        <li className="nav-link">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-2xl bg-slate-50 px-14 py-1 text-gray-950 transition-all"
                : `${
                    location.pathname === "/projects"
                      ? "text-yellow-950 transition-all hover:text-slate-100"
                      : "text-gray-500 transition-all hover:text-mustard-0"
                  }`
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
        <li className="nav-link">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-2xl bg-mustard-0 px-12 py-1 transition-all"
                : `${
                    location.pathname === "/projects"
                      ? "text-yellow-950 transition-all hover:text-slate-100"
                      : "text-gray-500 transition-all hover:text-mustard-0"
                  }`
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
