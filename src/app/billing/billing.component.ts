import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'es-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
    statusEvent = new CustomEvent('status');
    status: boolean = false;

    constructor() {}

    ngOnInit(): void {}
    }

    async setStatus() {
        this.status = !this.status;
        this.statusEvent.initCustomEvent('status', true, false, this.status);
        document.dispatchEvent(this.statusEvent);
    }
}
