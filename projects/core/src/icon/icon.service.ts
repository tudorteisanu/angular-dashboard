import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  http = inject(HttpClient);
  cache: Map<string, string> = new Map();

  loadIcon(src:string){
    const cachedResponse= this.cache.get(src);

    if(cachedResponse) {
      return of(cachedResponse)
    }

    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');

    return this.http.get(src, {headers, responseType: 'text'})
      .pipe(
        tap((res) => {
          this.cache.set(src, res);
        })
      )
  }
}
