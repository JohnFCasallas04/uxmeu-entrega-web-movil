import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { RegisterComponent } from './register/register.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
import { AccountManageComponent } from './account-manage/account-manage.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { FamilyGroupComponent } from './family-group/family-group.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover-pass', component: RecoverPassComponent },
  { path: 'principal-menu', component: PrincipalMenuComponent },
  { path: 'account-manage', component: AccountManageComponent },
  { path: 'change-pass', component: ChangePassComponent },
  { path: 'family-group', component: FamilyGroupComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }