import { Routes } from '@angular/router';
import { BillingComponent } from './billing.component';
import { InfoComponent } from './info/info.component';
import { ReviewComponent } from './review/review.component';

export const BILLING_ROUTES: Routes = [
    { path: '', component: BillingComponent, pathMatch: 'full' },
    { path: 'info', component: InfoComponent, pathMatch: 'full' },
    { path: 'review', component: ReviewComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
