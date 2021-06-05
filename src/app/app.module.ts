import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BillingModule } from './billing/billing.module';

@NgModule({
    imports: [
        BrowserModule,
        BillingModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
