//decrire un test
// les tests doivent repondre aux attentes clients

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { FormsModule } from "@angular/forms";

describe("AppComponent (AVEC SPECTATOR", () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [AppComponent],
    imports: [FormsModule],
  });
  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it("should work", () => {
    const article = spectator.query("article");
    expect(article?.textContent).toBe('cliquez sur le bouton "generer"');
  });
  it("should change message when user click on generate button", async () => {
    //recuperation de la fixtures, creation du composant

    spectator.click("button");

    expect(spectator.query("article")).toHaveText("Mon mot de passe :");
  });

  it("Should update settings when user clicks on checkboxes ", () => {
    //recuperation de la fixture

    spectator.click("#uppercase");
    expect(component.uppercase).toBeTrue();

    spectator.click("#numbers");
    expect(component.numbers);

    spectator.click("#symbols");
    expect(component.symbols);

    spectator.typeInElement("33", "#length");
    expect(component.length).toBe(33);
  });
});

//je teste mon appComponent
// dans la convention on doit dire, cela devrait faire ceci (it (should work) expect (devrait )tobe (etre))
describe("appComponent (AVEC TESTBED)", () => {
  //permet d eviter la redondance du code et lire ce code en premier

  //declarqation de la fixture component
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it("should work", async () => {
    //methode TESTBED de angular

    //fixtures c est le navigateur afin de pouvoir cliquer et faire des actions

    //ne pas oublier de lancer la detection de changement
    fixture.autoDetectChanges();

    //on regarde si notre h1 est conforme
    const h1 = fixture.nativeElement.querySelector("h1");
    expect(h1.textContent).toBe("Generer un mot de passe fort");

    //on test si a l ouverture du navigateur le texte 'cliquez sur le bouton generer est bien actif'

    const article = fixture.nativeElement.querySelector("article");
    expect(article.textContent).toBe('cliquez sur le bouton "generer"');
  });

  // ne pas oublier ASYNC car si c est dans le ts c est bon mais si du css dans un fichier il faut attendre la compilation
  it("should change message when user click on generate button", async () => {
    //recuperation de la fixtures, creation du composant

    fixture.autoDetectChanges();

    const button = fixture.nativeElement.querySelector("button");
    button.click();
    //penser a la detection de changement au clic
    fixture.autoDetectChanges();
    const article = fixture.nativeElement.querySelector("article");
    expect(article.textContent).toBe("Mon mot de passe :");
  });

  //checkbox detect changes
  it("Should update settings when user clicks on checkboxes ", async () => {
    //recuperation de la fixture

    fixture.autoDetectChanges();

    const uppercase = fixture.nativeElement.querySelector("#uppercase");
    uppercase.click();
    expect(fixture.componentInstance.uppercase).toBeTrue();

    const numbers = fixture.nativeElement.querySelector("#numbers");
    numbers.click();
    expect(fixture.componentInstance.numbers).toBeTrue();

    const symbols = fixture.nativeElement.querySelector("#symbols");
    symbols.click();
    expect(fixture.componentInstance.symbols).toBeTrue();

    // input lenght
    //input il faut obligatoirement simuler l evenement
    const length = fixture.nativeElement.querySelector("#length");
    length.value = 33;
    length.dispatchEvent(new Event("input"));

    expect(fixture.componentInstance.length).toBe(33);
  });
});
