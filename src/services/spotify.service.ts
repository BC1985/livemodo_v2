import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { token ,client_id} from '../../environment'
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private authorizeUrl: string;
    private tokenUrl: string
    // private headers: object
    /**
     *
     */
    constructor(private _http: HttpClient) {       
    }

    
    searchMusic(str: string, type="artist"):Observable<any>{
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${token}`
          })
        };
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, httpOptions);
        
        // const spotifyToken ="Bearer BQD2td-j613gR7Cnr55gApIdbfM4fBcyyLBuzZyjKj4aMDnUxC8_Tu5LKlMhNPGh1_PUcL4vzo_tNFaYu3M-PU_jrfCTzciMJ5TfY3CtfcSd7YzTcSdvOwoBDDpKkdZGa_d1pNzVqlxzZK6pbj6im7M"
        
    }
    getAccess(){
        // const access_token = 'fa1328cc7c094f2b9c8ac375c01de374'
       
       this.authorizeUrl=`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:4200%2Fcallback%2F`;
       
       this._http.get(this.authorizeUrl).subscribe(res=>console.log(res))
      
    }

    getToken(){

      // sample code --AQCnrKnIuByixIkoCdW3plgyzhNuCDQYJgEZcjcAeF_rKH9R40nFIiHH3WudjJaBWlq3OMJDiGGin1SKUQ204Lq7y3UhuLVEmGMDK46UAyEl3OtAp8M-n_X78VMxLNqRgGTECbxSr71yt4js92fuwvVXhJkn679N48An0qwjz0eZDw
      this.tokenUrl = `https://accounts.spotify.com/api/token?grant_type=authorization_code&code=AQCnrKnIuByixIkoCdW3plgyzhNuCDQYJgEZcjcAeF_rKH9R40nFIiHH3WudjJaBWlq3OMJDiGGin1SKUQ204Lq7y3UhuLVEmGMDK46UAyEl3OtAp8M-n_X78VMxLNqRgGTECbxSr71yt4js92fuwvVXhJkn679N48An0qwjz0eZDw&redirect_uri=http://localhost:4200/callback`;
      this._http.get(this.tokenUrl).subscribe(res=>console.log(res))
      
    }
}