import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: String = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe( albumes => {
      this.albumes = albumes;
    });
  }

  onSearchChange(event) {
    this.textoBuscar = event.detail.value;

  }
}
