import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // pour écrire le template dans un fichier à part de la logique
})
export class AppComponent {
  title = 'Together';
  paragraphe = `Together, une application mobile d'entraide et de soutien pour les personnes victimes de violences conjugales.`
}
