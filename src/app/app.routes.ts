import {Routes} from '@angular/router';
import {HomePage} from './components/home-page/home-page';
import {FullWidthLayout} from './components/layouts/full-width-layout/full-width-layout';
import {ContainerLayout} from './components/layouts/container-layout/container-layout';
import {NewEvent} from './components/new-event/new-event';
import {PageNotFound} from './components/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: FullWidthLayout,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: '**',
        component: PageNotFound
      }
    ]
  },
  {
    path: '',
    component: ContainerLayout,
    children: [
      {
        path: 'events/create',
        component: NewEvent
      }
    ]
  },
];
