import { Suspense, lazy } from "react";
import {
	BrowserRouter,
	type RouteObject,
	useRoutes,
} from "react-router";
import Loader from "./comonents/Loader";

const IndexPage = lazy(() => import("src/components/pages/IndexPage"));
const ProfilePage = lazy(() => import("src/components/pages/ProfilePage"));
const HabitPage = lazy(() => import("src/components/pages/HabitPage"));
const NotFoundPage = lazy(() => import("src/components/pages/NotFoundPage"));

const InnerRoutes = () => {
	const routesArray: RouteObject[] = [
		{
			path: "/",
			index: true,
			element: <IndexPage />,
		},
		{
			path: "profile",
			element: <ProfilePage />,
		},
		{
			path: "habbit/:id",
			element: <HabitPage />,
		},
		{
			path: "*",
			element: <NotFoundPage />,
		},
	];

	const routesElement = useRoutes(routesArray);

	return <Suspense fallback={<Loader />}>{routesElement}</Suspense>;
};

const Router = () => {
	return (
		<BrowserRouter>
			<InnerRoutes />
		</BrowserRouter>
	);
};

export default Router;
