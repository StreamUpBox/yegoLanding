import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { WelComeComponent } from './welcome/welComeComponent';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/pagenotfound.component';

const routes: Routes = [
    {path: 'welcome', component: WelComeComponent},
    {path: 'sign-up', component: RegisterComponent},
    {path: 'sign-in', component: LoginComponent},
    { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

