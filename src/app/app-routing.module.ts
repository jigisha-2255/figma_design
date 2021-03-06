import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { CandidateComponent } from './candidate/candidate.component';

const routes: Routes = [
  { path:'',component:MasterPageComponent },
  { path:'add-candidate',component:AddCandidateComponent},
  { path:'candidate',component:CandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MasterPageComponent,AddCandidateComponent,CandidateComponent]
