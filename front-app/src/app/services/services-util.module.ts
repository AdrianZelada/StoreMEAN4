/**
 * Created by iZel on 4/3/17.
 */
import { NgModule} from "@angular/core";
import { HttpModule} from "@angular/http";
import { CommonModule } from '@angular/common';
import { $Http} from './$http';
import { ArrayFilterPipe} from './pipes/datafilterpipe';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/observable/defer';

@NgModule({
  imports:[
    HttpModule,
    CommonModule
  ],
  exports:[ArrayFilterPipe],
  declarations:[ArrayFilterPipe],
  providers:[$Http]
})

export class ServiceUtilModule{}
