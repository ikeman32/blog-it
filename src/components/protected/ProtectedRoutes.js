// // import { Navigate, Outlet } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import checkLogin from "../../state/protected";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

// function ProtectedRoutes() {
//   const { loggedIn } = useSelector((state) => state.protected.loggedIn);
//   const dispatch = useDispatch();
//   const isAuth = useAuth();
//   return dispatch(checkLogin());
// }

// export default ProtectedRoutes;
