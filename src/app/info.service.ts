import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
info1:string[] = ["Peter", "123", "peter@gmail"];
info2:string[] = ["Mary", "456", "mary@ymail"];
info3:string[] = ["Stephen","789","stephen@hotmail"];

getInfo1():string[]{
return this.info1;
}
getInfo2():string[]{
  return this.info2;
  
  }
  getInfo3():string[]{
    return this.info3;
    
    }
    addInfo1(info :any){

      this.info1.push(info)
  
      return this.info1
  
    }
  constructor() { }
}
