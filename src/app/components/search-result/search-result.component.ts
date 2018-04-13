import { Component,  HostBinding, Input } from '@angular/core';
import { flight } from '../../app.models';
import { serachResultService } from '../search-result/search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent  {

  resultfound = false;
  flightList: flight[];

   constructor(
    private SService: serachResultService
  ) {
  }

  ngOnInit() {
    this.SService.change.subscribe(change=>{
      this.flightList=this.SService.flightList;
    });
  }

}
