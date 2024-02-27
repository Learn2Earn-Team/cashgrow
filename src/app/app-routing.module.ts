import { LoginGuard } from './auth/guards/login.guard';
import { DefaultlayoutComponent } from './Default/defaultlayout/defaultlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { BuysocialComponent } from './pages/buysocial/buysocial.component';
import { RegistrationformComponent } from './pages/registrationform/registrationform.component';
import { TemsComponent } from './pages/tems/tems.component';
import { TransferformComponent } from './pages/transferform/transferform.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RegiesterdResolver } from './pages/registrationform/regiesterd.resolver';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { ChatboxComponent } from './pages/chatbox/chatbox.component';
import { GroupdetailsComponent } from './pages/groupdetails/groupdetails.component';
import { GroupchatComponent } from './pages/groupchat/groupchat.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ShareProfileComponent } from './pages/share-profile/share-profile.component';
import { ComplainComponent } from './pages/complain/complain.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AddpackageComponent } from './pages/addpackage/addpackage.component';


const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'login', component: LoginComponent, data: { title: 'Login' } },
        { path: 'home', component: HomeComponent , canActivate: [LoginGuard]},
        { path: 'buysocial', component: BuysocialComponent , canActivate: [LoginGuard]},
        { path: 'addpackage', component: AddpackageComponent , canActivate: [LoginGuard]},
        { path: 'forgetpassword', component: ForgetpasswordComponent },
        
        { path: 'registrationform', component: RegistrationformComponent},
        { path: 'tems', component: TemsComponent},
        { path: 'privacy-policy', component: PrivacyPolicyComponent},
        { path: 'transfer', component: TransferformComponent , canActivate: [LoginGuard]},
        { path: 'reset-password', component: ResetPasswordComponent , canActivate: [LoginGuard]},
        { path: 'chatbox', component: ChatboxComponent , canActivate: [LoginGuard]},
        { path: 'groupdetails', component: GroupdetailsComponent , canActivate: [LoginGuard]},
        { path: 'groupchat', component: GroupchatComponent, canActivate: [LoginGuard]},
        { path: 'calculator', component: CalculatorComponent},
        { path: 'share-profile', component: ShareProfileComponent, canActivate: [LoginGuard]},
        { path: 'complain', component: ComplainComponent, canActivate: [LoginGuard]},

        // { path: 'default/dashboard', component: DashboardComponent },
        {path:'', loadChildren: () => import('../app/Default/defaultlayout/defaultlayout.module').then(module => module.DefaultlayoutModule)},
        // { path: 'default/login', component: LoginComponent },
  // {
  //   path: 'login', component: LoginComponent , canActivate:[LoginGuard]
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true} )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
