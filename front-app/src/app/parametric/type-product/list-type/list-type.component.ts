/**
 * Created by iZel on 4/2/17.
 */
import { Component,OnInit} from "@angular/core";
import { $Http} from "../../../services/$http"
import { Subject} from "rxjs/Subject";
import * as _ from 'lodash';

@Component({
  selector:'list-type-product',
  templateUrl:'./list-type.component.html'
})

export class ListTypeComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject();
  data : any[];
  dataDoc : any[];

  constructor(private $http:$Http){

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength:2
    };
    this.$http.request({
      method:'GET',
      url:'/api/typeProduct'
    }).subscribe(
      (data)=>{
        this.data=data;
        this.dataDoc=_.cloneDeep(data);
        this.dtTrigger.next()
        console.log(data)
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  view(item){
    console.log(item);

    this.data.push(
      {
        _id:123123123,
        name:"adrian"
      }
    )
    // this.dtTrigger.next()
  }
}
