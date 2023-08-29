import ContactForm from "../components/contact/ContactForm";
import ContactBar from "../components/ContactBar";

export default function Contact() {
  return (
    <main className="relative min-h-screen w-full bg-mustard-0 font-roboto lg:px-20 lg:pt-20">
      <div className="flex h-full w-full flex-col px-4 pb-6 pt-16 lg:relative lg:px-0 lg:pb-0 lg:pt-0">
        <ContactForm />
      </div>
      <h1 className="-left-16 bottom-0 z-10 hidden text-[10rem] font-bold text-yellow-950 lg:absolute lg:block">
        Collab?
      </h1>
      <ContactBar />
    </main>
  );
}
