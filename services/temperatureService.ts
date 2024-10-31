import { UNITS } from "@/constants/constant";

export const getOpposite = (unit:string)=>{
    return unit===UNITS.celcius ? UNITS.faranheit : UNITS.celcius
}

export const convertTemperature = (value:string,unit:string) =>{
    const temp = Number(value) 
    if(isNaN(temp)) return ""
    return unit == UNITS.celcius ? Number(temp - 32/ 1.8).toFixed(2).toString() : (temp* 1.8 + 32).toFixed(2).toString()
}

export const isIceTemperature = (value:string,unit:string)=>{
    const temp:number = Number(value) 
    if(unit==UNITS.celcius){
        return temp <= 0
    }
    else return temp <= 32
}