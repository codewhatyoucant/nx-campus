import { Routes } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
    { path: "", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
    { path: "home", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
    { path: "login", loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule) },
    { path: "signup", loadChildren: () => import("./pages/signup/signup.module").then(m => m.SignupModule) },
    { path: "profile", loadChildren: () => import("./pages/profile/profile.module").then(m => m.ProfileModule)},
    { path: "dashboard", loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule) },
    { path: "admin", loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule) },
    { path: "**", redirectTo: "/" },
];

export default routes;