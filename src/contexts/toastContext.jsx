import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { formatErrorMessage } from "../utils/errorMessageFormatter";

export const ToastProvider = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  return {
    showSuccess,
    showError,
  };
};
