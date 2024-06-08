import { Routes } from '@angular/router';
import path from 'node:path';
import { MenuComponent } from './3componentes/menu/menu.component';

export const routes: Routes = [
    {
        path: 'menu', component: MenuComponent
    },
    {
        path: 'body', component: MenuComponent
    },
    {
        path: 'footer', component: MenuComponent
    }
];
