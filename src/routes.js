import Search from "@/components/Search";
import About from "@/components/About";
import TrackDetails from "@/components/TrackDetails";

const routes = [
  { path: "/", component: Search, name: "search" },
  { path: "/about", component: About, name: "about" },
  { path: "/track/:id", component: TrackDetails, name: "track" },
  { path: "*", redirect: "/" },
];

export default routes;
