import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
    { path: "home", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
    { path: "login", loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule) },
    { path: "**", redirectTo: "/" },
];

export default routes;