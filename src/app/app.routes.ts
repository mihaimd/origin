import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'message/:id',
    loadComponent: () =>
      import('./view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: 'question-river',
    loadComponent: () => import('./question-river/question-river.page').then( m => m.QuestionRiverPage)
  },
  {
    path: 'how-to',
    loadComponent: () => import('./how-to/how-to.page').then( m => m.HowToPage)
  },
  {
    path: 'q-detail/:id',
    loadComponent: () => import('./q-detail/q-detail.page').then( m => m.QDetailPage)
  }
];

