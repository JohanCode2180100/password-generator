import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Generer un mot de passe fort</h1>

      <div class="grid">
        <div>
          <h3>Votre futur mot de passe :</h3>
          <article>Cliquer sur le bouton generer :</article>
        </div>
        <div>
          <label for="length">Longueur du mot de passe :</label>
          <input type="range" min="10" max="50" name="length" />

          <label>
            <input
              role="switch"
              type="checkbox"
              name="uppercase"
              id="uppercase"
            />Contiendra des majuscules
          </label>
          <label>
            <input
              role="switch"
              type="checkbox"
              name="numbers"
              id="numbers"
            />Contiendra des nombres
          </label>
          <label>
            <input
              role="switch"
              type="checkbox"
              name="symbols"
              id="symbols"
            />Contiendra des caracteres speciaux
          </label>
          <hr />
          <button>GENERER</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'password-generator';
}
