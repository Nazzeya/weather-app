import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Main } from '../models/main';
import { Wind } from '../models/wind';
import { Weather } from '../models/weather';
   
@Injectable()
export class HttpDataService{
    
    constructor(private http: HttpClient){ }

    getData(urlString : string){
        return this.http.get(urlString)
    }

    getWeather (urlString : string) : Observable<Weather[]> {
        return this.http.get(urlString).pipe(map((data:any)=>{
            let weatherList = data["weather"];
            return weatherList.map(function(weather:any): Weather{
                return new Weather(weather.id, weather.main, weather.description, weather.icon)
            })
        }))
    }

    getMain (urlString : string) : Observable<Main> {
        return this.http.get(urlString).pipe(map((data:any)=>{
            let main = data["main"];
            return new Main(main.temp, main.feels_like, main.temp_min, main.temp_max, main.pressure, main.humidity)
        }))
    }

    getWind (urlString : string) : Observable<Wind> {
        return this.http.get(urlString).pipe(map((data:any)=>{
            let wind = data["wind"];
            return new Wind(wind.speed, wind.deg)
        }))
    }


}