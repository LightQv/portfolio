import PropTypes from "prop-types";
import MobileSvg from "../../svg/projects/MobileSvg";
import DesktopSvg from "../../svg/projects/DesktopSvg";

export default function DisplaySwitch({ format, setFormat }) {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-base font-medium">Display as</p>
      <button
        type="button"
        aria-label="switch project format"
        className={`flex h-full w-1/2 self-end rounded-md border-2 border-slate-100 bg-slate-100 transition-all ${
          format === "mobile" ? "justify-start" : "justify-end"
        }`}
        onClick={() => setFormat(format === "mobile" ? "desktop" : "mobile")}
      >
        <div
          className={`h-full w-1/2 rounded-l-md rounded-r-sm border-r-[1px] border-slate-100 px-4 py-2 text-slate-100 ${
            format === "mobile"
              ? "cursor-default bg-slate-100 text-yellow-950"
              : "bg-mustard-0 hover:bg-slate-200 hover:text-yellow-950"
          } transition-all`}
        >
          <MobileSvg />
        </div>
        <div
          className={`h-full w-1/2 rounded-l-sm rounded-r-md border-l-[1px] border-slate-100 px-4 py-2 text-slate-100 ${
            format === "desktop"
              ? "cursor-default bg-slate-100 text-yellow-950"
              : "bg-mustard-0 hover:bg-slate-200 hover:text-yellow-950"
          } transition-all`}
        >
          <DesktopSvg />
        </div>
      </button>
    </div>
  );
}

DisplaySwitch.propTypes = {
  format: PropTypes.string.isRequired,
  setFormat: PropTypes.func.isRequired,
};
