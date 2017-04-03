/**
 * Created by iZel on 4/3/17.
 */

import { Injectable} from '@angular/core';
import { Http, Headers,RequestOptionsArgs } from '@angular/http';
import {END_POINT} from './constants'
//
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/scan';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/takeWhile';
// import 'rxjs/add/operator/retryWhen';
// import 'rxjs/add/observable/defer';

@Injectable()
export class $Http {
  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private optionsAssign = {headers: this.headers};
  model=END_POINT ;
  // private options = new RequestOptions(this.optionsAssign);
  readonly ATTEMPTS =3;
  readonly DELAY =1000;


  constructor(private http:Http){}

  request (options:RequestOptionsArgs,isLocal?:boolean): Observable<any>{
    let _this=this;
    if(isLocal){
      options.url=END_POINT+options.url;
    }
    return this._curryHttp(options)
      .retryWhen(function(errors){
        return errors
          .scan((acc, value) => {
            acc+=1;
            if(acc < _this.ATTEMPTS){
              return acc
            }else{
              throw new Error(value)
            }
          }, 0)
          .delay(_this.DELAY);
      });
  }

  protected _curryHttp(options):Observable<any>{
    let opt=Object.assign({},options,this.optionsAssign);
    return Observable.defer(() =>{
      return this.http.options(this.model||'',opt)
        .map(res => res.json());
    })
  }
}
