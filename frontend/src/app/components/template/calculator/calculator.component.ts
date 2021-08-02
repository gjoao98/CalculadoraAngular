import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = '';
  answered = false;
  setOperator = false;

  constructor() {
    this.operand1 = 0;
    this.operand2 = 0;
  }

  ngOnInit(): void {

  }

  pressButton(button: string) {
    if (button === '/' || button === 'x' || button === '-' || button === '+') {
       const lastButton = this.num[this.num.length - 1];

       if (lastButton === '/' || lastButton === 'x' || lastButton === '-' || lastButton === '+')  {
         this.setOperator = true;
       }

       if ((this.setOperator) || (this.num === '')) {
         return;
       }

       this.operand1 = parseFloat(this.num);
       this.operator = button;
       this.setOperator = true;
    }

    if (this.num.length === 10) {
      return;
    }

    this.num += button;
 }

 getAnswer() {
  this.calculationString = this.num;
  this.operand2 = parseFloat(this.num.split(this.operator)[1]);

    if (this.operator === '/') {
      this.num = (this.operand1 / this.operand2).toString();
      
    } else if (this.operator === 'x') {
      this.num = (this.operand1 * this.operand2).toString();
      
    } else if (this.operator === '-') {
      this.num = (this.operand1 - this.operand2).toString();

    } else if (this.operator === '+') {
      this.num = (this.operand1 + this.operand2).toString();
      
    } else {
      this.num = 'Invalid Operation';
    }
    
    this.answered = true;
    this.setOperator = false;
  }

  allClear() {
    this.num = '';
    this.setOperator = false;
  }

  clearOne() {
    this.num = this.num.substring(0, this.num.length -1);
    this.setOperator = false;
  }
}

