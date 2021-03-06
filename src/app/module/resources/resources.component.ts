import { Component, OnInit } from '@angular/core';
import { Composition } from '../../core/model/composition';
import { ApiService } from '../../core/service/api.service';
import { Resource } from '../../core/model/resource';
import { SelectItem } from 'primeng/api';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
    displayDialog: boolean = false;
    newResource: boolean;
    selectedResource: Resource;
    resource: Resource = new Resource();

    showDialog() {
        this.displayDialog = true;
    }

    cols: any[];

    constructor(private apiService: ApiService, private modalService: NgbModal) { }

    resources: Resource[];

    ngOnInit() {

        this.cols = [
            { field: 'title', header: 'Title' },
            { field: 'instrument', header: 'Instrument' },
            { field: 'ensemble', header: 'Ensemble/Category' },
            { field: 'location', header: 'Location' },
            { field: 'notes', header: 'Notes' }
        ];


        this.apiService.getAllResources().subscribe(
            data => { this.resources = data },
            error => { console.log(error) }
        )
    }


    showDialogToAdd() {
        this.newResource = true;
        this.resource = new Resource();
        this.displayDialog = true;
    }

    subscribeToData() {
        this.apiService.getAllResources().subscribe(
            data => { this.resources = data },
            error => { console.log(error) }
        )
    }

    save() {

        this.apiService.createOrUpdateResource(this.resource).subscribe(
            data => {
                console.log(data);
                this.displayDialog = false;
                this.subscribeToData();
            },
            error => {
                console.log(error);
                this.displayDialog = false;
                this.subscribeToData();
            }
        )

    }

    delete() {

        this.apiService.deleteResource(this.resource).subscribe(
            data => {
                console.log(data);
                this.displayDialog = false;
                this.subscribeToData();
            },
            error => {
                console.log(error);
                this.displayDialog = false;
                this.subscribeToData();
            }
        )
    }

    onRowSelect(event) {
        this.newResource = false;
        this.resource = this.cloneResource(event.data);
        this.displayDialog = true;
    }

    cloneResource(value: Resource): Resource {
        let resource = new Resource();
        for (let prop in value) {
            resource[prop] = value[prop];
        }
        return resource;
    }

}