import { Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { RankingComponent } from './pages/ranking/ranking.component';

export const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'ranking', component: RankingComponent }
];