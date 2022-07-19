import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, SearchdInput: any): any {
   // console.log(value);
   // console.log(SearchdInput);
  if(value){
   return value.filter((search:any) => {
   // console.log(search);
  return search.name.toLowerCase().indexOf(SearchdInput.toLowerCase())> -1
   });
  } 
} 
}
