import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Composition } from '../model/composition';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    apiUrl = environment.apiUrl;


    //Compositions 

    //Get All
    getAllCompositions():Observable<Composition[]> {
        return this.http.get<Composition[]>(this.apiUrl + '/composition/getAll');
    }

    //UTILITY

    //Get All Catagories
    getAllCatagories():Observable<string[]> {
        return  this.http.get<string[]>(this.apiUrl + 'composition/util/catagory')
    }

    //Upload CSV 
    uploadCSV(formData: FormData): Observable<any> {
        return this.http.post(this.apiUrl+'/composition/submitCSV', formData)
    }




}

