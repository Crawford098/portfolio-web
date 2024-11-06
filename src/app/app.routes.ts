import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { Services } from './Pages/Services/services';

export const routes: Routes = [
    { title: 'Home', path: '', component: HomeComponent },
    { title: 'Services', path: 'services', component: Services }
];
