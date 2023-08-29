import { useState, useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import image from "../../assets/image/profile.jpg";
import imageSmile from "../../assets/image/profile-smile.jpg";
import ThumbSvg from "../svg/contact/ThumbSvg";
import mailSchema from "../../services/validators";
import { notifyPromise } from "../toasts/CustomToasts";

export default function ContactForm() {
  const [isHover, setIsHover] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const form = useRef();

  // --- Formik Logic --- //
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: mailSchema,

    onSubmit: (values) => {
      // --- EmailJS Logic --- //
      notifyPromise(
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(() => {
            setIsSend(true);
          }),
        `Hey ${values.name}, I'll be back to you ASAP :)`,
        `Sorry ${values.name}, something went wrong.`
      );
    },
  });

  function definePicture() {
    if (!isHover) {
      if (Object.keys(formik.errors).length === 0 && isSend) {
        return imageSmile;
      }
      return image;
    }
    return "https://media.giphy.com/media/zIPKUgO2Ln6XC/giphy.gif";
  }

  return (
    <div className="mt-2 flex h-3/4 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-slate-100 bg-mustard-0 px-4 py-6 text-yellow-950 lg:h-full lg:flex-row lg:items-start lg:justify-between lg:border-none lg:px-0 lg:py-0">
      <section className="mt-2 flex h-3/4 flex-col items-center justify-center gap-2 lg:items-start">
        <img
          src={definePicture()}
          alt="profile-pic"
          className={`h-44 w-44 object-cover ${
            isHover ? "rounded-md" : "rounded-full"
          }`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        <div className="text-center font-bold lg:text-start">
          <h1 className="text-xl opacity-60 lg:text-7xl lg:opacity-100">
            {isSend ? "Thank you!" : "Interested,"}
          </h1>
          <h3
            className={`-mt-1 text-2xl lg:-mt-0 lg:text-7xl lg:opacity-60 ${
              isSend ? "lg:w-3/4" : ""
            }`}
          >
            {isSend ? "I'll be back to you ASAP." : "send me an email."}
          </h3>
        </div>
      </section>
      <form
        ref={form}
        className="mt-2 flex w-full flex-col gap-2 md:w-2/3 lg:mr-24 lg:mt-16 lg:w-1/3 lg:gap-4 lg:rounded-2xl lg:border-2 lg:border-slate-100 lg:px-4 lg:py-6"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="hidden text-center text-2xl font-bold underline underline-offset-8 lg:block">
          Here
        </h3>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="flex w-full justify-between text-sm font-bold"
          >
            <p>
              Name{" "}
              {formik.touched.name && formik.errors.name && (
                <span className="font-medium text-redly-0">*</span>
              )}
            </p>
            {formik.touched.name && formik.errors.name && (
              <p className="font-medium text-redly-0">{formik.errors.name}</p>
            )}
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md p-2 text-sm placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="flex w-full justify-between text-sm font-bold"
          >
            <p>
              Email{" "}
              {formik.touched.email && formik.errors.email && (
                <span className="font-medium text-redly-0">*</span>
              )}
            </p>
            {formik.touched.email && formik.errors.email && (
              <p className="font-medium text-redly-0">{formik.errors.email}</p>
            )}
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md p-2 text-sm placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2">
          <label
            htmlFor="message"
            className="flex w-full justify-between text-sm font-bold"
          >
            <p>
              Message{" "}
              {formik.touched.message && formik.errors.message && (
                <span className="font-medium text-redly-0">*</span>
              )}
            </p>
            {formik.touched.message && formik.errors.message && (
              <p className="font-medium text-redly-0">
                {formik.errors.message}
              </p>
            )}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here"
            cols="30"
            rows="5"
            minLength="10"
            maxLength="250"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="resize-none rounded-md p-2 text-sm placeholder:italic lg:h-40"
          />
        </div>
        <button
          type="submit"
          disabled={isSend || !mailSchema.isValidSync(formik.values)}
          className="mt-2 flex w-1/3 items-center justify-center gap-1 rounded-md border-2 border-slate-100 px-4 py-2 text-sm font-medium italic text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950 disabled:cursor-default disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-600 lg:w-fit lg:gap-2 lg:self-center lg:text-base"
          onSubmit={formik.handleSubmit}
        >
          Send
          <ThumbSvg />
        </button>
      </form>
    </div>
  );
}
