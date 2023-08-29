import ProfileCard from "../components/about/mobile/ProfileCard";
import ContactCard from "../components/about/mobile/ContactCard";
import Introduction from "../components/about/desktop/Introduction";
import ContactBar from "../components/ContactBar";

export default function About() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-mustard-0 font-roboto lg:min-h-screen lg:px-20 lg:pt-20">
      {/* Mobile Display */}
      <div className="flex h-full w-full flex-col gap-4 px-4 pb-6 pt-16 lg:hidden">
        <ProfileCard />
        <ContactCard />
      </div>

      {/* Desktop Display */}
      <section className="relative hidden h-full w-full lg:flex">
        <Introduction />
      </section>
      <h1 className="-left-14 bottom-0 z-10 text-[10rem] font-bold text-yellow-950 lg:absolute lg:block">
        Hello, There.
      </h1>
      <ContactBar />
    </main>
  );
}
