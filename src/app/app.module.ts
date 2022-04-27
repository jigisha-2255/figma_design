import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routingComponents } from './app-routing.module';
// import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MasterPageComponent } from './master-page/master-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TabsComponent } from './tabs/tabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './info/info.component';
import { ResumesComponent } from './resumes/resumes.component';
import { DocumentsComponent } from './documents/documents.component';
import { LeftPartComponent } from './info/left-part/left-part.component';
import { RightPartComponent } from './info/right-part/right-part.component';
import { AccordionComponent } from './info/right-part/accordion/accordion.component';
import { ListItemComponent } from './add-candidate/list-item/list-item.component';
import { AddPersonalDetailsComponent } from './add-candidate/add-personal-details/add-personal-details.component';
import { AddLanguageComponent } from './add-candidate/add-language/add-language.component';
import { AddEducationComponent } from './add-candidate/add-education/add-education.component';
import { AddProjectsComponent } from './add-candidate/add-projects/add-projects.component';
import { AddExperienceComponent } from './add-candidate/add-experience/add-experience.component';
import { AddSalaryDetailsComponent } from './add-candidate/add-salary-details/add-salary-details.component';
import { AddSkillsComponent } from './add-candidate/add-skills/add-skills.component';
import { AddCertificateComponent } from './add-candidate/add-certificate/add-certificate.component';
import { WorkChipsComponent } from './add-candidate/add-personal-details/work-chips/work-chips.component';
import { SkillChipsComponent } from './add-candidate/add-skills/skill-chips/skill-chips.component';
// import { CustomDatepickerComponent } from './add-candidate/add-education/custom-datepicker/custom-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    NavigationBarComponent,
    MasterPageComponent,
    CarouselComponent,
    routingComponents,
    BreadcrumbComponent,
    TabsComponent,
    InfoComponent,
    ResumesComponent,
    DocumentsComponent,
    LeftPartComponent,
    RightPartComponent,
    AccordionComponent,
    ListItemComponent,
    AddPersonalDetailsComponent,
    AddLanguageComponent,
    AddEducationComponent,
    AddProjectsComponent,
    AddExperienceComponent,
    AddSalaryDetailsComponent,
    AddSkillsComponent,
    AddCertificateComponent,
    WorkChipsComponent,
    SkillChipsComponent,
    // CustomDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
