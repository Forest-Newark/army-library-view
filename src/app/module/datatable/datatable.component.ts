import { Component, OnInit, Input } from '@angular/core';
import { Composition } from '../../core/model/composition';
import { ApiService } from '../../core/service/api.service';
import { SelectItem } from 'primeng/api';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  msgs: Message[] = [];

  compositions: Composition[];

  composition: Composition;

  displayDialog: boolean = false;
  cols: any[];
  defaultcols: any[]
  selectedColumns: any[];
  catagories: SelectItem[];

  isUserAuthenticated: boolean = false;
  userName: string;

  @Input('isUserAuthenticated')
  set _isUserAuthenticated(value: boolean) {
    this.isUserAuthenticated = value;
  }

  @Input('userName')
  set _userName(value: string) {
    this.userName = value;
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.catagories = [];
    this.cols = [
      { field: 'catagory', header: 'Category' },
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
      { field: 'catagory', heade: 'Category' },
      { field: 'libraryNumber', header: 'Library Number' },
      { field: 'title', header: 'Title' },
      { field: 'composer', header: 'Composer' },
      { field: 'ensemble', header: 'Ensemble' }
    ];
    this.selectedColumns = this.defaultcols;


    this.apiService.getAllCatagories().subscribe(
      data => {
        this.processCatagories(data);
      },
      error => {
        console.log(error);
      }
    )
    this.subscribeToCompositionData();

  }

  subscribeToCompositionData(){
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
      this.catagories.push({ label: element, value: element }, )
    });

  }

  onRowSelect(event) {
    this.displayDialog = true;
  }

  addComposition(){
    this.composition = new Composition();
    this.composition.editedBy = this.userName;
    this.displayDialog = true;
  }

  save() {
    this.composition.editedBy = this.userName;
    this.apiService.saveOrUpdateComposition(this.composition).subscribe(
      data => {
        this.displayDialog = false;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Composition Saved' });
        this.subscribeToCompositionData();
      },
      error => {
        this.displayDialog = false;
        this.msgs.push({ severity: 'error', summary: 'Something went wrong' });
      }
    )
  }

  delete() {
    this.apiService.deleteComposition(this.composition).subscribe(
      data => {
        this.displayDialog = false;
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Composition Deleted' });
        this.subscribeToCompositionData();
      },
      error => {
        this.displayDialog = false;
        this.msgs.push({ severity: 'error', summary: 'Something went wrong' });
      }
    )
  }





}



