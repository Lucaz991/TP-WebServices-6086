import { Routes } from '@angular/router';
// Importamos puntos
import { PuntoA } from './components/punto-a/punto-a';
import { PuntoB } from './components/punto-b/punto-b';
import { PuntoC } from './components/punto-c/punto-c'; 
import { PuntoD } from './components/punto-d/punto-d';
import { PuntoE } from './components/punto-e/punto-e';

export const routes: Routes = [
  // Cuando la URL diga "punto-a", mostramos las películas
  { path: 'punto-a', component: PuntoA },
  // Cuando la URL diga "punto-b", mostramos los autos
  { path: 'punto-b', component: PuntoB },
  // Cuando la URL diga "punto-c", mostramos el conversor de divisas
  { path: 'punto-c', component: PuntoC },
  // Cuando la URL diga "punto-d", mostramos el conversor de texto a voz
  { path: 'punto-d', component: PuntoD },
  // Cuando la URL diga "punto-e", mostramos el clima
  { path: 'punto-e', component: PuntoE },
  // Si alguien entra a la página principal por defecto, lo mandamos al Punto A
  { path: '**', pathMatch: 'full', redirectTo: 'punto-a' }
];