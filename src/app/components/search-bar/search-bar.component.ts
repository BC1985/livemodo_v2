import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../../services/spotify.service";
import { Artist } from "../../Models/Artists";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
searchStr: string;
searchResults: Artist[]
  constructor(private _spotifyService: SpotifyService) { }
  getArtist(){
    this._spotifyService.searchMusic(this.searchStr).subscribe((data) => {
      this.searchResults= data.artists.items;
      
      console.log('Artist-',data.artists.items[0].name, 'Genres-',data.artists.items[0].genres)
    });
  }
getAuth(){
  this._spotifyService.getAccessToken()
}
  ngOnInit(): void {
   
  }

}
