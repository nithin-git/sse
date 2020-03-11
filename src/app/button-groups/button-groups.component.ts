import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-groups',
  templateUrl: './button-groups.component.html',
  styleUrls: ['./button-groups.component.scss']
})
export class ButtonGroupsComponent implements OnInit {
  @Input() numbers: number;
  @Input() tileId: number;
  @Input() activeTile: number;

  @Output() buttonclick = new EventEmitter<{ tile, buttonId }>();
  
  buttons = [];
  constructor() { }

  ngOnInit(): void {
    this.generateButtons();
  }
  generateButtons() {
    for (let i = 1; i <= this.numbers; i++) {
      this.buttons.push(i);
    }
  }
  buttonClicked(id: number) {
    this.buttonclick.emit({ tile: this.tileId, buttonId: id });
  }


}
