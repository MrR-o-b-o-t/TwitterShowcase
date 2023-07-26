import Search from "../../ClientApp/src/components/Search"
import Home  from "../../ClientApp/src/components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
    {
        path: '/search',
        element: <Search/>
    }
];

export default AppRoutes;
