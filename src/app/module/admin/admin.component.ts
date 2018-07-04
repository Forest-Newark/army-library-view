import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Composition } from '../../core/model/composition';
import { SelectItem } from 'primeng/api';
import { ApiService } from '../../core/service/api.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  msgs: Message[] = [];

  userName: string;
  password: string;
  isUserAuthenticated: boolean = false;
  users: SelectItem[];
  loginError: boolean = false;
  loginMessage: string;
  loading: boolean = false;

  @Output('isUserAuthenticatedEvent') isUserAuthenticatedEvent = new EventEmitter<boolean>();


  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.users = [
      { label: 'Select User', value: null },
      { label: 'Forest Newark (SGT)', value: 'Forest Newark (SGT)' },
      { label: 'Paul Laches (SGT)', value: 'Paul Laches (SGT))' },
      { label: 'Jeff Barnhart (SGT)', value: 'Jeff Barnhart (SGT)' },
      { label: 'Eric Dowler (SPC)', value: 'Eric Dowler (SPC)' }
    ];

  }

  login() {
    if (!this.userName) {
      this.loginError = true;
      this.loginMessage = 'Please select a user';
      return;
    }

    if (this.password) {
      if (this.password.includes('246libraryadmin')) {
        console.log(this.userName);
        this.isUserAuthenticated = true;
        this.isUserAuthenticatedEvent.emit(true);
        this.loginMessage = '';
        this.loginError = false;

      } else {
        this.loginError = true;
        this.loginMessage = 'WRONG PASSWORD YOU DUMB FUCK'
      }

    } else {
      this.loginError = true;
      this.loginMessage = "Please enter a password"
    }
  }


  myUploader(event) {
    this.loading = true;
    let fileList: FileList = event.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('File', file, file.name);
      formData.append('userName', this.userName);
      this.apiService.uploadCSV(formData).subscribe(
        data => {
          this.loading = false;
          this.msgs = [];
          this.msgs.push({ severity: 'success', summary: 'File Uploaded!' });
        },
        error => {
          this.loading = false;;
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'Something Went Wrong' });
        }
      )
    }


  }



}


