import { Injectable, Output, EventEmitter } from '@angular/core';
import { flightService } from '../../aap.fligtsService';
import { flight } from '../../app.models';


@Injectable()
export class serachResultService {

    @Output() change: EventEmitter<boolean> = new EventEmitter();
    
    updateFlightsData = false;
    flightList: flight[];
    
    constructor(
        private flightSer: flightService

    ) { }


    getFlights() {
        console.log("YESS, Service Call ");
        this.flightList = this.flightSer.getflights();
        this.updateFlightsData = true;
        this.change.emit(this.updateFlightsData);

    }

}