import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
        transform(value: string, limit:number){
            let actualLimit = (limit) ? limit : 30;
            if(!value){
                return null; 
            }else{return value.substr(0,actualLimit) + '...';}
            
        }
}