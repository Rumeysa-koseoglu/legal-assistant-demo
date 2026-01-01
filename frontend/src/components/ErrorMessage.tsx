import { PiSealWarning } from "react-icons/pi";

function ErrorMessage() {
  return (
    <div
      className="flex flex-row gap-4 items-center px-2 py-3 w-100 text-sm font-raleway text-red-900 rounded relative z-1 bg-red-200 border-l-3 border-red-400"
      role="alert"
    >
      <PiSealWarning className="size-6" />
      <span>Please type something to search</span>
    </div>
  );
}

export default ErrorMessage;
