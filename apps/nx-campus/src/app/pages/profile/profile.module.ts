// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile.component';
import { UserService } from '../../services/user.service';
import { MfaComponent } from '@nx-campus/ui-lib';


const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        MfaComponent
    ],
    providers: [AuthService, UserService],
})

export class ProfileModule { }