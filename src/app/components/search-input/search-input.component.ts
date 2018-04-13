import { Component, OnInit } from '@angular/core';
import { SearchResultComponent } from '../search-result/search-result.component';
import { serachResultService } from '../search-result/search-result.service';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent{

  constructor(
    private SService: serachResultService) {

  }

  searchFlights(): void {
    this.SService.getFlights();
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

}
