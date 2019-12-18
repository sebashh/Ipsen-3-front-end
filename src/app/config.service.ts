import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:5432';
  getConfig() {
    return this.http.get(this.configUrl);
  }
}
