import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { StringOpsComponent } from './string-ops/string-ops.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ErrorComponent } from './error/error.component';

// ng generate component --skip-import Error
// a wildcard ** mindig az utolso legyen, hogy ne takarja ki a tobbi route-ot illesztéskor
const routes: Route[] = [
    {path: '', component: StringOpsComponent},
    {path: 'first-child', component: FirstChildComponent},
    {path: 'template-form', component: TemplateFormComponent},
    {path: 'reactive', component: ReactiveFormComponent},

    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}