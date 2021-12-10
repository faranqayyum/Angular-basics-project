import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'signup', component: SignUpFormComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // {path: '', component: SignUpFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
