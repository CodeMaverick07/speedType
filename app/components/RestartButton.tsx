import { MdRefresh } from "react-icons/md";

const RestartButton = ({ className = "" }: { className?: string }) => {
  return (
    <button
      tabIndex={-1} // to prevent focus
      className={`block rounded px-8 py-2 hover:bg-slate-700/50  ${className}`}
    >
      <MdRefresh className="w-8 h-8 text-white" />
    </button>
  );
};

export default RestartButton;
