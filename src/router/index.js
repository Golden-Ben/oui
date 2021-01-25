import Vue from "vue";
import Router from "vue-router";

import signin from "@/components/signin";
import signup from "@/components/signup";
import Home from "../views/Home";
import store from "../views/store";
import store1 from "../views/store1";
import PrivateChat from "../views/PrivateChat";
import gethired from "../views/gethired";
import hire from "../views/hire";
import test from "../views/test";
import ProfileRightNav from "@/components/ProfileRightNav";
import ProfilePage from "@/pages/ProfilePage";
import MainNav from "@/components/MainNav";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/store1",
      name: "store1",
      component: store1
    },
    {
      path: "/mn",
      name: "mn",
      component: MainNav
    },
    {
      path: "/Pp",
      name: "P",
      component: ProfilePage
    },
    {
      path: "/Pr",
      name: "Pr",
      component: ProfileRightNav
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/gethired",
      name: "gethired",
      component: gethired
    },
    {
      path: "/hire",
      name: "hire",
      component: hire
    },

    {
      path: "/PrivateChat",
      name: "PrivateChat",
      component: PrivateChat
    },

    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/store",
      name: "store",
      component: store
    },

    {
      path: "/signin",
      name: "signin",
      component: signin
    },

    {
      path: "/signup",
      name: "signup",
      component: signup
    }
  ]
});
