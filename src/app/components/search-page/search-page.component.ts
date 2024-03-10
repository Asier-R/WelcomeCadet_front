import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  totalAngularPackages: any;

  userHandle: string = "";
  userImage: string = "";
  userBio: string = "";

  items: string[] = ["User", "Ship", "Organization"];

  selectedSearch: string = "User";

  constructor(private http: HttpClient) { }

  onUserSearch() {
    console.log("[LOG][onUserSearch] Initiating HTTP Request");
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.starcitizen-api.com/b5e9ed2dc66bb3f09c9c85730e48ea63/v1/auto/user/Isaac_Peral').subscribe(data => {
      this.totalAngularPackages = data.total;
      this.userHandle = data.data.profile.handle;
      this.userImage = data.data.profile.image;
      this.userBio = data.data.profile.bio;
      console.log("[LOG][onUserSearch] Inside subcription", JSON.stringify(data));
    })

  }

  setSelectedSearch(item: string) {
    this.selectedSearch = item;
  }

}
