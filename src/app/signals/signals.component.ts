import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  counter = signal(0);

  // set() para definir um novo valor
  // update((oldValue) => oldValue + 1) para definir um novo valor com base em um valor antigo
  // mutate() para atualizar o valor com base em um valor antigo

  increment() {
    this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.push("INCREMENT");
  }

  decrement() {
    this.counter.update((oldConter) => oldConter - 1);
    this.actions.push("DECREMENT");
  }
}
