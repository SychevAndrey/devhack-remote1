import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'es-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        window.addEventListener('message', event => {
            console.log(event);
        });
    }

}
