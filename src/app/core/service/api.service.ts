import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Composition } from '../model/composition';
import { Resource } from '../model/resource';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    apiUrl = environment.apiUrl;

    serviceTest() {
        return this.http.get(this.apiUrl + '/api/servicetest');
    }


    //Compositions 

    //Get All
    getAllCompositions(): Observable<Composition[]> {
        return this.http.get<Composition[]>(this.apiUrl + '/composition/getAll');
    }

    saveOrUpdateComposition(compoisition: Composition): Observable<Composition> {
        return this.http.post<Composition>(this.apiUrl + '/composition/saveOrUpdate', compoisition);
    }
    deleteComposition(compoisition: Composition): Observable<Composition> {
        return this.http.post<Composition>(this.apiUrl + '/composition/delete', compoisition);
    }

    downloadBackup() {
        return this.http.get(this.apiUrl +'/composition/downloadCSV')
    }


    //Resource
    //Get All
    getAllResources(): Observable<Resource[]> {
        return this.http.get<Resource[]>(this.apiUrl + '/resource/getAll')
    }

    createOrUpdateResource(resource: Resource): Observable<Resource> {
        return this.http.post<Resource>(this.apiUrl + '/resource/createOrUpdate', resource);
    }

    deleteResource(resource: Resource): Observable<Resource> {
        return this.http.post<Resource>(this.apiUrl + '/resource/delete', resource)
    }

    //UTILITY
    //Get All Catagories
    getAllCatagories(): Observable<string[]> {
        return this.http.get<string[]>(this.apiUrl + 'composition/util/catagory')
    }

    //Upload CSV 
    uploadCSV(formData: FormData): Observable<any> {
        return this.http.post(this.apiUrl + '/composition/submitCSV', formData)
    }




}

