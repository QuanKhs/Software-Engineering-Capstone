import BucketDetail from "../features/bucket";
import HomePage from "../features/homePage";
import Login from "../features/loginPage";
import SignUp from "../features/signUpPage";
import UserProfile from "../features/userProfile/index";



export const Routes = [
  {
    name: "signup",
    path: "/signup",
    exact: false,
    main: () => <SignUp />,
  },
  {
    name: "login",
    path: "/login",
    exact: false,
    main: () => <Login />,
  },
];

export const RoutesBlook = [
  {
    name: "homepage",
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    name: "userprofile",
    path: "/userprofile",
    exact: false,
    main: () => <UserProfile />,
  },
  {
    name: "bucket",
    path: "/bucket/:name",
    exact: false,
    main: () => <BucketDetail />,
  },
];
