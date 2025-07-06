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
    path: 'q-detail/:qGroup/:id',
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
  },
  {
    path: 'game1-4',
    loadComponent: () => import('./game/game1-4/game1-4.page').then( m => m.Game14Page)
  },
  {
    path: 'campain0',
    loadComponent: () => import('./game/campain0/campain0.page').then( m => m.Campain0Page)
  },
  {
    path: 'game1-5',
    loadComponent: () => import('./game/game1-5/game1-5.page').then( m => m.Game15Page)
  },
  {
    path: 'game1-6',
    loadComponent: () => import('./game/game1-6/game1-6.page').then( m => m.Game16Page)
  },
  {
    path: 'game1-7',
    loadComponent: () => import('./game/game1-7/game1-7.page').then( m => m.Game17Page)
  },
  {
    path: 'game1-8',
    loadComponent: () => import('./game/game1-8/game1-8.page').then( m => m.Game18Page)
  },
  {
    path: 'game1-9',
    loadComponent: () => import('./game/game1-9/game1-9.page').then( m => m.Game19Page)
  },
  {
    path: 'game1-10',
    loadComponent: () => import('./game/game1-10/game1-10.page').then( m => m.Game110Page)
  },
  {
    path: 'game1-11',
    loadComponent: () => import('./game/game1-11/game1-11.page').then( m => m.Game111Page)
  },
  {
    path: 'game1-12',
    loadComponent: () => import('./game/game1-12/game1-12.page').then( m => m.Game112Page)
  },
  {
    path: 'game1-13',
    loadComponent: () => import('./game/game1-13/game1-13.page').then( m => m.Game113Page)
  },
  {
    path: 'game1-14',
    loadComponent: () => import('./game/game1-14/game1-14.page').then( m => m.Game114Page)
  },
  {
    path: 'game1-15',
    loadComponent: () => import('./game/game1-15/game1-15.page').then( m => m.Game115Page)
  },
  {
    path: 'game1-16',
    loadComponent: () => import('./game/game1-16/game1-16.page').then( m => m.Game116Page)
  },
  {
    path: 'game1-17',
    loadComponent: () => import('./game/game1-17/game1-17.page').then( m => m.Game117Page)
  },
  {
    path: 'game1-18',
    loadComponent: () => import('./game/game1-18/game1-18.page').then( m => m.Game118Page)
  },
  {
    path: 'game1-19',
    loadComponent: () => import('./game/game1-19/game1-19.page').then( m => m.Game119Page)
  },
  {
    path: 'game1-20',
    loadComponent: () => import('./game/game1-20/game1-20.page').then( m => m.Game120Page)
  },
  {
    path: 'game1-21',
    loadComponent: () => import('./game/game1-21/game1-21.page').then( m => m.Game121Page)
  },
  {
    path: 'game1-22',
    loadComponent: () => import('./game/game1-22/game1-22.page').then( m => m.Game122Page)
  },
  {
    path: 'game1-23',
    loadComponent: () => import('./game/game1-23/game1-23.page').then( m => m.Game123Page)
  },
  {
    path: 'game1-24',
    loadComponent: () => import('./game/game1-24/game1-24.page').then( m => m.Game124Page)
  },
  {
    path: 'game1-25',
    loadComponent: () => import('./game/game1-25/game1-25.page').then( m => m.Game125Page)
  },
  {
    path: 'game1-26',
    loadComponent: () => import('./game/game1-26/game1-26.page').then( m => m.Game126Page)
  },
  {
    path: 'game1-27',
    loadComponent: () => import('./game/game1-27/game1-27.page').then( m => m.Game127Page)
  },
  {
    path: 'game1-28',
    loadComponent: () => import('./game/game1-28/game1-28.page').then( m => m.Game128Page)
  },
  {
    path: 'game1-29',
    loadComponent: () => import('./game/game1-29/game1-29.page').then( m => m.Game129Page)
  },
  {
    path: 'game1-30',
    loadComponent: () => import('./game/game1-30/game1-30.page').then( m => m.Game130Page)
  }
];

