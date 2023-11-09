import { IoAlertCircleOutline } from "react-icons/io5";

const icons = {
  error: <IoAlertCircleOutline className="text-2xl text-red-600" />,
};

function Message({ children, type }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-stone-100 p-3 text-sm font-medium">
      <span>{icons[type]}</span>
      {children}
    </div>
  );
}

export default Message;
