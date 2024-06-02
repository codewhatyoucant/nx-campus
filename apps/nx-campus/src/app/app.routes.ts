import { Routes } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
    { path: "", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule), data: { breadcrumb: "Home" } },
    { path: "login", loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule), data: { breadcrumb: "Login" } },
    { path: "logout", loadChildren: () => import("./pages/logout/logout.module").then(m => m.LogoutModule), data: { breadcrumb: "Logout" } },
    { path: "signup", loadChildren: () => import("./pages/signup/signup.module").then(m => m.SignupModule), data: { breadcrumb: "Signup" } },
    { path: "profile", loadChildren: () => import("./pages/profile/profile.module").then(m => m.ProfileModule), data: { breadcrumb: "Profile" } },
    { path: "dashboard", loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule), data: { breadcrumb: "Dashboard" } },
    { path: "admin", loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule), data: { breadcrumb: "Admin" } },
    { path: "**", redirectTo: "/" },
];

export default routes;