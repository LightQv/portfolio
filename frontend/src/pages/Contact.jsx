import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import image from "../assets/image/profile.jpg";
import imageSmile from "../assets/image/profile-smile.jpg";
import ThumbSvg from "../components/svg/ThumbSvg";

export default function Contact() {
  const [isSend, setIsSend] = useState(false);
  const form = useRef();

  const mailSchema = Yup.object({
    name: Yup.string()
      .max(25, "Name must be max 25 characters.")
      .required("Name is requiered"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is requiered"),
    message: Yup.string()
      .min(10, "Your message must contain min 10 characters.")
      .required("Message is requiered"),
  });

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
      emailjs
        .sendForm(
          "service_x9t9k4e",
          "template_oz0psqr",
          form.current,
          "qg_koggM9N5Jzv1aJ"
        )
        .then(
          () => {
            toast.success(`Thank you ${values.name} for your email :)`, {
              position: "top-center",
              theme: "colored",
            });
            setIsSend(true);
          },
          (error) => {
            toast.error(
              `Sorry ${values.name}, the following error has occured : ${error} :(`,
              {
                position: "top-center",
                theme: "colored",
              }
            );
          }
        );
    },
  });

  return (
    <main className="flex min-h-screen items-center bg-slate-50 px-8 pb-6 pt-24">
      <div className="w-full lg:m-auto lg:w-1/3">
        <section className="flex flex-col items-center justify-center gap-2 rounded-t-xl bg-mustard-0 p-6">
          <img
            src={
              Object.keys(formik.errors).length === 0 && isSend
                ? imageSmile
                : image
            }
            alt="profile-pic"
            className="h-48 w-48 rounded-full"
          />
          <div className="text-center font-bold text-slate-100">
            <h1 className="text-2xl">Wanna collab ?</h1>
            <h3 className="-mt-1 text-lg">Email me right here !</h3>
          </div>
        </section>
        <form
          ref={form}
          className="space-y-4 rounded-b-xl bg-gray-100 p-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0"
          onSubmit={formik.handleSubmit}
        >
          <div
            className="flex flex-col gap-2"
            style={
              formik.touched.name && formik.errors.name
                ? { color: "var(--red)" }
                : { color: "var(--black)" }
            }
          >
            <label htmlFor="name" className="text-sm font-semibold">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"}
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
          <div
            className="flex flex-col gap-2"
            style={
              formik.touched.email && formik.errors.email
                ? { color: "var(--red)" }
                : { color: "var(--black)" }
            }
          >
            <label htmlFor="email" className="text-sm font-semibold">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
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
          <div
            className="flex flex-col gap-2 lg:col-span-2"
            style={
              formik.touched.message && formik.errors.message
                ? { color: "var(--red)" }
                : { color: "var(--black)" }
            }
          >
            <label htmlFor="message" className="text-sm font-semibold">
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : "Message"}
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
              className="rounded-md p-2 text-sm placeholder:italic"
            />
          </div>
          <button
            type="submit"
            disabled={isSend || !mailSchema.isValidSync(formik.values)}
            className="flex w-1/3 items-center justify-center gap-1 rounded-lg bg-mustard-0 px-4 py-2 text-sm text-slate-100 disabled:bg-gray-300 lg:col-span-1 lg:w-1/2"
            onSubmit={formik.handleSubmit}
          >
            Send
            <ThumbSvg />
          </button>
        </form>
      </div>
    </main>
  );
}
