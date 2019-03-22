import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Item {
    title: string;
    url: string;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private dataURL = 'https://api.hnpwa.com/v0/news/1.json';

    constructor(private httpClient: HttpClient) {
    }

    getData(): Observable<Item[]> {
        return this.httpClient.get<Item[]>(this.dataURL);
    }
}
