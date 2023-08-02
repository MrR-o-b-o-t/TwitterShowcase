import Search from "../../ClientApp/src/components/Search"
import Home from "../../ClientApp/src/components/Home";
import Random from "../../ClientApp/src/components/Random/Random"

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/random',
        element: <Random />
    }
];

export default AppRoutes;
