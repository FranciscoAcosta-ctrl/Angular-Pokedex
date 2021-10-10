import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeCatalogueComponent } from './components/poke-catalogue/poke-catalogue.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeProfileComponent } from './components/poke-profile/poke-profile.component';

const routes: Routes = [
  {path: 'homeCatalogue', component: PokeCatalogueComponent},
  {path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: 'pokeProfile', component: PokeProfileComponent},
  {path: '', pathMatch: 'full', redirectTo: 'homeCatalogue'},
  {path: '**', pathMatch: 'full', redirectTo: 'homeCatalogue'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
