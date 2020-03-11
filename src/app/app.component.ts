import { Component } from '@angular/core';
import { TileItem } from './interfaces/tile-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-test';
  number = 4;
  tiles: TileItem[] = [];
  activeTile: number = this.number;
  ngOnInit() {
    this.buildTiles();
  }
  buildTiles() {
    for (let itm = 1; itm <= this.number; itm++) {
      this.tiles.push({
        id: itm,
        show: true
      })
    }
  }
  itemClicked(event, tile: TileItem) {
    if (event.buttonId === tile.id) {
      tile.show = false;
      this.activeTile--;
      return;
    }
    if (event.buttonId) {
      this.tiles.map(tileItem => {
        if (tileItem.id === event.buttonId) { 
          tileItem.show = !tileItem.show;
          if(tileItem.show)
            this.activeTile++;
          else
            this.activeTile--;
        }
      });
    }
  }
}
