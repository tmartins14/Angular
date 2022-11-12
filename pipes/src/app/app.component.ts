import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = '';
  inputDate = '';
  amount = '';
  miles: number;

  onNameChange(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.name = value;
  }

  onDateChange(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.inputDate = value;
  }

  onAmountChange(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.amount = value;
  }

  onMilesChange(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.miles = parseFloat(value);
  }
}
