import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { WelComeComponent } from './welcome/welComeComponent';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path: 'welcome', component: WelComeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'welcome'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

