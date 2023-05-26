import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1>Generer un mot de passe fort</h1>

      <div class="grid">
        <div>
          <h3>Votre futur mot de passe :</h3>
          <article>{{ message }}</article>
        </div>
        <div>
          <label for="length">Longueur du mot de passe : {{ length }}</label>
          <!-- on passe $event dans cet Input car on va retrouver tout les elements du TARGET(range..) -->
          <!-- au lieu du input on met change qui va permettre de faire la detection au relachement de la souris -->
          <input
          [(ngModel)]="length"
            id="length"
            type="range"
            min="10"
            max="50"
            name="length"
            
          />

          <label>
            <!-- detection du check avec $EVENT -->
            <input
              [(ngModel)]="uppercase"
              role="switch"
              type="checkbox"
              name="uppercase"
              id="uppercase"
            />Contiendra des majuscules
          </label>
          <label>
            <input
              [(ngModel)]="numbers"
              role="switch"
              type="checkbox"
              name="numbers"
              id="numbers"
            />Contiendra des nombres
          </label>
          <label>
            <input
              [(ngModel)]="symbols"
              role="switch"
              type="checkbox"
              name="symbols"
              id="symbols"
            />Contiendra des caracteres speciaux
          </label>
          <hr />
          <button (click)="onClickGenerate()">GENERER</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "password-generator";

  message: string = 'cliquez sur le bouton "generer"';

  length: number = 20;
  uppercase: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;

  onClickGenerate() {
    this.message = "Mon mot de passe :";
    console.table({
      uppercase: this.uppercase,
      symbols: this.symbols,
      numbers: this.numbers,
      length: this.length,
    });
  }


  onChangeUppercase(event: Event) {
    const element = event.target as HTMLInputElement;
    this.uppercase = element.checked;
  }
  addNumbers(event: Event) {
    const element = event.target as HTMLInputElement;
    this.numbers = element.checked;
  }
  addSpecialCaractere(event: Event) {
    const element = event.target as HTMLInputElement;
    this.symbols = element.checked;
  }
}
