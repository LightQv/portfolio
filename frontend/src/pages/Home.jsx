import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/image/profile.jpg";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="relative z-20 flex h-screen w-full flex-col items-center justify-center gap-3 bg-mustard-0 font-helvetica font-semibold text-gray-100">
      <h1 className="text-3xl">Hello &</h1>
      <Link
        to="/about"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <img
          src={profile}
          alt="profile-pic"
          className="h-48 w-48 rounded-full transition-all hover:scale-105"
        />
      </Link>
      <div className="flex flex-col items-center">
        <h3 className="-mt-1 text-6xl lg:text-7xl">welcome</h3>
        <h3 className="-mt-1 text-xl lg:text-2xl">
          {isActive ? "click to see more !" : "to my portfolio !"}
        </h3>
      </div>
    </main>
  );
}
