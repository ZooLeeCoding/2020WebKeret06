import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';

const routes: Route[] = [
    {path: 'first-child', component: FirstChildComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}