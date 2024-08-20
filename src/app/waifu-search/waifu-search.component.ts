import { Component } from '@angular/core';
import { WaifuService } from '../waifu.service';

@Component({
  selector: 'app-waifu-search',
  templateUrl: './waifu-search.component.html',
  styleUrls: ['./waifu-search.component.css']
})
export class WaifuSearchComponent {

  searchTag: string = '';
  results: any[] = [];

  constructor(private waifuService: WaifuService) { }

  search(): void {
    const tags = this.searchTag.split(',').map(tag => tag.trim());
    this.waifuService.searchWaifus(tags).subscribe(
      data => {
        this.results = data.images;
      },
      error => {
        console.error('An error occurred:', error.message);
      }
    );
  }
}


///
