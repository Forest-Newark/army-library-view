import { Component, OnInit } from '@angular/core';
import { Composition } from '../../core/model/composition';
import { ApiService } from '../../core/service/api.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  compositions: Composition[];
  cols: any[];
  defaultcols: any[]
  selectedColumns: any[];
  catagories: SelectItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.catagories = [];
    this.cols = [
      { field: 'catagory', header: 'Catagory' },
      { field: 'libraryNumber', header: 'Library Number' },
      { field: 'title', header: 'Title' },
      { field: 'composer', header: 'Composer' },
      { field: 'arranger', header: 'Arranger' },
      { field: 'ensemble', header: 'Ensemble' },
      { field: 'copyright', header: 'Copyright' },
      { field: 'notes', header: 'Notes' },
      { field: 'url', header: 'url' },
      { field: 'lastEdit', header: 'Last Edit' },
      { field: 'editedBy', header: 'Edited By' }

    ];

    this.defaultcols = [
      { field: 'catagory', header: 'Catagory' },
      { field: 'libraryNumber', header: 'Library Number' },
      { field: 'title', header: 'Title' },
      { field: 'composer', header: 'Composer' }
    ];
    this.selectedColumns = this.defaultcols;


    this.apiService.getAllCatagories().subscribe(
      data => {
        this.processCatagories(data);
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )

    this.apiService.getAllCompositions().subscribe(
      data => {
        this.compositions = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  processCatagories(catagories: string[]): void {
    catagories.forEach(element => {
      this.catagories.push( {label:element, value:element},)
    });

  }


}



