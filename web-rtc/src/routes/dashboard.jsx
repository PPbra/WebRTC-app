import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import ChatRoom from "views/ChatRoom/ChatRoom";
import VideoConference from "views/VideoConference/VideoConference";
// import Icons from "views/Icons/Icons";
// import Maps from "views/Maps/Maps";
// import Notifications from "views/Notifications/Notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Chat room",
    icon: "pe-7s-chat",
    component: ChatRoom
  },
  {
    path: "/typography",
    name: "Live Video Conference",
    icon: "pe-7s-video",
    component: VideoConference
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
