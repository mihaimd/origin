import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
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
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'game',
    loadComponent: () => import('./game/game-home/game.page').then( m => m.GamePage)
  },
    {
    path: 'game1-2',
    loadComponent: () => import('./game/game1-2/game1-2.page').then( m => m.GamePage12)
  },
  {
    path: 'game0',
    loadComponent: () => import('./game/game0/game0.page').then( m => m.Game0Page)
  },
  {
    path: 'game1-3',
    loadComponent: () => import('./game/game1-3/game1-3.page').then( m => m.Game13Page)
  }
];

