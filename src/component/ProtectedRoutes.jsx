import { handleToggle } from "@/utils/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const toggle = useSelector((store) => store.toggle.toggle);

  if (!user) {
    if (!toggle) {
      dispatch(handleToggle()); // Make the login visible
    }
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default ProtectedRoutes;
