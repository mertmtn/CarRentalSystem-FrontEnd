import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  carAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createBrandAddFrom();
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });

    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createBrandAddFrom() {
    this.carAddForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      brandId: [0, Validators.required],
      colorId: [0],
      dailyPrice: [''],
      modelYear: [''],
      description: [''],
    });
  }
  add() {
    if (this.carAddForm.valid) {
      let carAddModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carAddModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuzda geçersiz alanlar var.', 'Dikkat!');
    }
  }
}
