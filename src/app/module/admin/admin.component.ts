import { Component, OnInit } from '@angular/core';
import { Composition } from '../../core/model/composition';
import { ApiService } from '../../core/service/api.service';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  myUploader(event) {
    let fileList: FileList = event.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('File', file, file.name);
      formData.append('userName','admin');
      this.apiService.uploadCSV(formData).subscribe(
        data => {console.log('success')},
        error => {console.log(error)}
        )
    }


  }



}


