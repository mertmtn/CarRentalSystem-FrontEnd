import { CarImage } from "./carImage";

export interface  Car {
  carId:number,
  carName:string
  brandName:string,
  modelYear:number,
  carDescription:string,
  colorName:string
  dailyPrice:number
  carImageList:CarImage[]
}
