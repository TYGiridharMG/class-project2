import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ColorDirective } from './color.directive';
import { TableDirective } from './table.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TogglePasswordDirective } from './toggle-password.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterComponent } from './router/router.component';
import { ActivatedRouterComponent } from './activated-router/activated-router.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataBindingComponent,
    HeaderComponent,
    DirectivesComponent,
    NgForDirectiveComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    AttributeDirectiveComponent,
    ColorDirective,
    TableDirective,
    ParentComponent,
    ChildComponent,
    LifeCycleComponent,
    TemplateDrivenFormComponent,
    TogglePasswordDirective,
    ReactiveFormComponent,
    RouterComponent,
    ActivatedRouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
