import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientError } from '../model/client-error';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private logErrorUrl = 'http://localhost:8080/web-app/log-error';

  constructor(private http: HttpClient) { }

  logError(message: string, stack: string) {
    let clientError: ClientError = <ClientError>{};
    clientError.message = message;
    clientError.stack = stack; 
    this.postError(clientError).subscribe();
  }

  postError(clientError: ClientError): Observable<ClientError> {
    return this.http.post<ClientError>(this.logErrorUrl, clientError);
  }
}
