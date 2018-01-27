import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BucketsComponent } from './buckets/buckets.component';
import { UserBucketComponent } from './user-bucket/user-bucket.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "buckets", component: BucketsComponent},
  {path: "user/:name", component: UserBucketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
