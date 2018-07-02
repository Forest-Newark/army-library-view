import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Composition } from '../../core/model/composition';
import { SelectItem } from 'primeng/api';
import { ApiService } from '../../core/service/api.service';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userName: string;
  password: string;
  isUserAuthenticated: boolean = false;
  users: any[];
  loginError: boolean = false;
  loginMessage:string;

  @Output('isUserAuthenticatedEvent') isUserAuthenticatedEvent = new EventEmitter<boolean>();


  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.users = [
      { name: 'Select User', value: null },
      { name: 'Forest Newark (SGT)', value: 'Forest Newark (SGT)' },
      { name: 'Paul Laches (SGT)', value: 'Paul Laches (SGT))' },
      { name: 'Jeff Barnhart (SGT)', value: 'Jeff Barnhart (SGT)' },
      { name: 'Eric Dowler (SPC)', value: 'Eric Dowler (SPC)' }
    ];

  }

  login() {
    if(!this.userName){
      this.loginError = true;
      this.loginMessage = 'Please select a user';
      return;
    }

    if (this.password) {
      if (this.password.includes('246libraryadmin')) {
        this.isUserAuthenticated = true;
        this.isUserAuthenticatedEvent.emit(true);
        this.loginMessage = '';
        this.loginError = false;
        
      } else{
        this.loginError = true;
        this.loginMessage = 'WRONG PASSWORD YOU DUMB FUCK'
      }

    } else {
      this.loginError = true;
      this.loginMessage = "Please enter a password"
    }
  }

  myUploader(event) {
    let fileList: FileList = event.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('File', file, file.name);
      formData.append('userName', 'admin');
      this.apiService.uploadCSV(formData).subscribe(
        data => { console.log('success') },
        error => { console.log(error) }
      )
    }


  }



}


