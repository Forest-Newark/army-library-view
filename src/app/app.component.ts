import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/service/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading:boolean = true;
  spinner:boolean = true;

  fail:boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.serviceTest();
  }

  serviceTest() {
    this.apiService.serviceTest().subscribe(
      data => {
        this.loading = false;
      },
      error  => {
       this.fail = true;
       this.spinner = false;
      }
      
    );

  }

}
