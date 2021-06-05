import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'billing', pathMatch: 'full'},
    {
        path: 'billing',
        loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule)
    },
    { path: '**', redirectTo: 'billing', pathMatch: 'full'}
];
