import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  result: string = '';

  appendValue(value: string) {
    this.result += value;
  }

  clear() {
    this.result = '';
  }

  backspace() {
    this.result = this.result.slice(0, -1);
  }

  calculate() {
    try {
      this.result = eval(this.result).toString();
    } catch (error) {
      this.result = 'Error';
    }
  }
}
