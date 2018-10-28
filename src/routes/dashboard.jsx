import UserProfile from "views/UserProfile/UserProfile";
import ChatRoom from "views/ChatRoom/ChatRoom";

const dashboardRoutes = [
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/chats",
    name: "Chat room",
    icon: "pe-7s-chat",
    component: ChatRoom
  },
  
  { redirect: true, path: "/", to: "/chats", name: "Chat room" }
];

export default dashboardRoutes;
