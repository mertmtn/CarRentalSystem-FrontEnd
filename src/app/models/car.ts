import { CarImage } from "./carImage";

export interface  Car {
  carName:string
  brandName:string
  colorName:string
  dailyPrice:number
  carImageList:CarImage[]
}
