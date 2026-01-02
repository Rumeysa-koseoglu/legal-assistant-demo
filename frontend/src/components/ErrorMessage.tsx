import { PiSealWarning } from "react-icons/pi";

function ErrorMessage() {
  return (
    <div
      className="flex flex-row gap-2 md:gap-4 items-center px-2 py-2.5 md:py-3 w-[90%] md:w-[95%] lg:w-[74%] text-xs md:text-sm font-raleway text-red-900 rounded relative z-1 bg-red-200 border-l-3 border-red-400"
      role="alert"
    >
      <PiSealWarning className="size-5 md:size-6" />
      <span>Please type something to search</span>
    </div>
  );
}

export default ErrorMessage;
