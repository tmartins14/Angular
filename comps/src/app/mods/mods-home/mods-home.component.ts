import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue',
      content:
        'The sky is blue because of the light that is allowed through the ozone layer',
    },
    { title: 'Who will win the World Cup?', content: 'Portugal' },
    {
      title: 'Who is the only player to score a hat trick this World Cup?',
      content: 'Goncalo Ramos',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.modalOpen);

    this.modalOpen = !this.modalOpen;
  }
}
