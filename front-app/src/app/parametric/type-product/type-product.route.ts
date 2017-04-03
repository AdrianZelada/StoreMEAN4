/**
 * Created by iZel on 4/1/17.
 */
import { NgModule} from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { TypeProductComponent } from './type-product.component';
import { CrudTypeComponent } from './crud/crud-type.component';
import { ListTypeComponent } from './list-type/list-type.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TypeProductComponent,
    children: [
      {
        path: 'list',
        component: ListTypeComponent
      },
      {
        path: 'crud',
        component: CrudTypeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TypeProductRouting { }

export const routedComponents = [TypeProductComponent,ListTypeComponent,CrudTypeComponent];
