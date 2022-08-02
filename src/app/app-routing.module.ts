import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormComponent} from "@app/reactive-form/reactive-form.component";

const routes: Routes = [
    {
        path: '', component: ReactiveFormComponent
    },
    {path: 'reactive-form', component: ReactiveFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
