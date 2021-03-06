import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
  num = "";
  operand1: number;
  operand2: number;
  operator = "";
  calculationString = "";
  answered = false;
  setOperator = false;

  constructor() {
    this.operand1 = 0;
    this.operand2 = 0;
  }

  ngOnInit(): void {}

  // This function calculates the addition
  Addition() {
    this.num = (this.operand1 + this.operand2).toString();
  }

  // This function calculates the subtraction
  Subtraction() {
    this.num = (this.operand1 - this.operand2).toString();
  }

  // This function calculates the division
  Division() {
    this.num = (this.operand1 / this.operand2).toString();
  }

  // This function calculates the multiplication
  Multiplication() {
    this.num = (this.operand1 * this.operand2).toString();
  }

  // This function calculates the Percentage
  Percentage() {
    const result = (this.operand1 * this.operand2) / 100;
    this.num = result.toString();
  }

  // This function calculates the Power
  Power() {
    this.num = (this.operand1 ** this.operand2).toString();
  }

  // This function calculates the Square Root
  SquareRoot() {
    const result = Math.sqrt(this.operand1).toFixed(2);
    this.num = result.toString();
  }

  // This function show in the screen what the user is typing
  pressButton(button: string) {
    if (
      button === "/" ||
      button === "x" ||
      button === "-" ||
      button === "+" ||
      button === "%" ||
      button === "^" ||
      button === "√"
    ) {
      const lastButton = this.num[this.num.length - 1];

      if (
        lastButton === "/" ||
        lastButton === "x" ||
        lastButton === "-" ||
        lastButton === "+" ||
        lastButton === "%" ||
        lastButton === "^" ||
        lastButton === "√"
      ) {
        this.setOperator = true;
      }

      if (this.setOperator || this.num === "") {
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

  // This function calls the calculation functions by the operator typed, if none was typed, it gives an error
  getAnswer() {
    this.calculationString = this.num;
    this.operand2 = parseFloat(this.num.split(this.operator)[1]);

    switch (this.operator) {
      case "/":
        this.Division();
        break;

      case "x":
        this.Multiplication();
        break;

      case "-":
        this.Subtraction();
        break;

      case "+":
        this.Addition();
        break;

      case "%":
        this.Percentage();
        break;

      case "^":
        this.Power();
        break;

      case "√":
        this.SquareRoot();
        break;

      default:
        this.num = "Invalid Operation";
    }

    this.answered = true;
    this.setOperator = false;
  }

  // This function erases all that was typed
  allClear() {
    this.num = "";
    this.setOperator = false;
  }

  // This function erases one by one caractere that was typed
  clearOne() {
    this.num = this.num.substring(0, this.num.length - 1);
    this.setOperator = false;
  }
}
