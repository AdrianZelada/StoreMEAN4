/**
 * Created by iZel on 4/1/17.
 */
import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms"
import { TypeProductRouting} from './type-product.route';
import { routedComponents} from './type-product.route';
import { ServiceUtilModule} from '../../services/services-util.module';

import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ServiceUtilModule,
    DataTablesModule,
    TypeProductRouting
  ],
  declarations:[routedComponents]
})
export class TypeProductModule{}
