/**
 * Created by iZel on 4/1/17.
 */
import { Routes, RouterModule }  from '@angular/router';
import {TypeProductComponent } from './type-product.component'

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TypeProductComponent,
    // children: [
    //   {
    //     path: 'list',
    //     component: Inputs
    //   },
    //   {
    //     path: 'abm',
    //     component: Layouts
    //   }
    // ]
  }
];

export const routing = RouterModule.forChild(routes);
