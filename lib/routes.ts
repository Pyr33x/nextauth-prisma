type Route = {
  title: string;
  path: string;
};

const routes: Required<Route>[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "API",
    path: "/api/user",
  },
];

export { routes as Routes };
