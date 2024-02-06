import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {

  totalAngularPackages: any;

  constructor(private http: HttpClient) { }

  onUserSearch() {
    console.log("[LOG][ngOnInit] Initiating HTTP Request");
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.starcitizen-api.com/b5e9ed2dc66bb3f09c9c85730e48ea63/v1/auto/user/Isaac_Peral').subscribe(data => {
      this.totalAngularPackages = data.total;
      console.log("[LOG][ngOnInit] Inside subcription", data);
      window.alert(JSON.stringify(data));
    })

  }
}
