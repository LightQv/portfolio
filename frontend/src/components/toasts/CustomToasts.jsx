import toast, { Toaster } from "react-hot-toast";

export default function CustomToasts() {
  return (
    <Toaster
      toastOptions={{
        success: {
          className: "bg-yellow-950 text-slate-100 text-sm font-semibold",
        },
        error: {
          className: "bg-redly-0 text-slate-100 text-sm font-semibold",
          iconTheme: {
            primary: "rgb(241 245 249)",
            secondary: "rgb(233, 52, 52)",
          },
        },
        position: "top-center",
        duration: 3000,
      }}
    />
  );
}

// Toast Success
export const notifySuccess = (message) => {
  toast.success(message, { id: "success" });
};

// Toast Promise
export const notifyPromise = (promise, message, error) => {
  toast.promise(
    promise,
    {
      loading: "Sending...",
      success: <p className="">{message}</p>,
      error: <p>{error}</p>,
    },
    {
      className: "bg-yellow-950 text-slate-100 text-sm font-semibold",
    }
  );
};

// Toast Warning
export const notifyDuplicate = (message) =>
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } shadow-toast pointer-events-auto flex h-12 w-fit max-w-[350px] items-center justify-center gap-2 rounded-lg bg-amber-500 px-[10px] py-2 text-sm font-semibold leading-snug text-slate-100`}
      >
        <span className="h-6 w-6 rounded-full bg-slate-100 text-center text-base text-amber-500">
          !
        </span>
        <p>{message}</p>
      </div>
    ),
    { id: "duplicate", icon: "!" }
  );

// Toast Error
export const notifyError = (message) => toast.error(message, { id: "error" });
