import { Component, OnInit} from '@angular/core';
import { HttpDataService} from './services/httpData.service';
import { Main } from './models/main';
import { WeatherMain } from './models/weather_main';
   
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpDataService]
})
export class AppComponent implements OnInit { 

    // for clearing the input entering place
    inputText!: string;
    clear () {
    this.inputText = '';
    }

    weatherMain: WeatherMain | undefined;
    main: Main | undefined;
      
    constructor(private httpService: HttpDataService){}

    cityName: string = 'Aktobe';
    done: boolean = false;
    apiKey: string = '2d21aec31d47718b3f24ce5ac37d2af4';
    url: string = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&appid=' + this.apiKey

    submit(cityName: string) {
        return('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + this.apiKey)
    }

    
    
    ngOnInit(){
        console.log(this.url)
        this.httpService.getData(this.url).subscribe({next:(data:any) => this.weatherMain=new WeatherMain(data.coord, data.weather, data.base, data.main, data.visibility, data.Wind, data.clouds, data.dt, data.sys, data.timezone, data.id, data.name, data.cod)});
        this.httpService.getMain(this.url).subscribe({next:(data:any) => this.main=new Main(data.temp, data.feels_like, data.temp_min, data.temp_max, data.pressure, data.humidity)})
        }

    showData(){
        
    }
}