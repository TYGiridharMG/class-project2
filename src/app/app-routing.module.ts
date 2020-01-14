import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component'
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterComponent } from './router/router.component';
import { ActivatedRouterComponent } from './activated-router/activated-router.component';
import { AccessGuard } from './access.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-binding', component: DataBindingComponent },
  {
    path: 'directives', component: DirectivesComponent, children: [
      { path: 'ng-for-directive', component: NgForDirectiveComponent },
      { path: 'ng-if-directive', component: NgIfDirectiveComponent },
      { path: 'ng-switch-directive', component: NgSwitchDirectiveComponent },
      { path: 'attribute-directive', component: AttributeDirectiveComponent }
    ]
  },
  {
    path: 'parent', component: ParentComponent, children: [
      { path: 'child', component: ChildComponent }
    ]
  },
  { path: 'life-cycle', component: LifeCycleComponent, data: ['Giridhar'], canActivate: [AccessGuard] },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'router', component: RouterComponent },
  { path: 'activated-router/:id', component: ActivatedRouterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
