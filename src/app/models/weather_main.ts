import { Clouds } from "./clouds";
import { Coord } from "./coord";
import { Main } from "./main";
import { Sys } from "./sys";
import { Weather } from "./weather";
import { Wind } from "./wind";

export class WeatherMain {

    constructor ( public coord: Coord, 
                public weather: Weather[], 
                public base: string, 
                public main: Main, 
                public visibility: number, 
                public wind: Wind, 
                public clouds: Clouds, 
                public dt: number,
                public sys: Sys,
                public timezone: number, 
                public id: number, 
                public name: string, 
                public cod: number
                ){ }
}