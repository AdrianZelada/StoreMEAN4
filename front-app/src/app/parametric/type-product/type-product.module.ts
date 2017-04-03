/**
 * Created by iZel on 4/1/17.
 */
import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms"
import { TypeProductRouting} from './type-product.route';
import { routedComponents} from './type-product.route'


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    TypeProductRouting
  ],
  declarations:[routedComponents]
})
export class TypeProductModule{}
