import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<Array<string>>([]);
  counter = signal(0);

  // set() para definir um novo valor que não seja baseado no valor antigo
  // update((oldValue) => oldValue + 1) para definir um novo valor com base em um valor antigo
  // mutate() para atualizar o valor com base em um valor antigo, e esse método deve ser usado...
  //para valores que podem sofrer mutação, o que não é o caso dos números.
  // o mutate() nos permite atribuir um novo valor mas editando um valor existente
  // Ações de push de arrays só devem ser utilizadas com o método mutate()

  increment() {
    // Exemplo de uso dos métodos do Signal
    // this.counter.set(this.counter() + 1);
    this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.mutate((oldActions) => oldActions.push("INCREMENT"));
    // Alternativa => this.actions.update((oldActions) => [...oldActions, 'INCREMENT']);
  }

  decrement() {
    this.counter.update((oldConter) => oldConter - 1);
    this.actions.mutate((oldActions) => oldActions.push("DECREMENT"));
  }
}
