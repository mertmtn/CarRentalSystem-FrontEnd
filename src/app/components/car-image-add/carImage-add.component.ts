import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from 'src/app/services/carImage/carimage.service';
import { UploadService } from 'src/app/services/upload/upload.service';

@Component({
  selector: 'app-carImage-add',
  templateUrl: './carImage-add.component.html',
  styleUrls: ['./carImage-add.component.css'],
})
export class CarImageAddComponent implements OnInit {
  filePath = '';
  carId:number;
  addCarImageForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private uploadService: UploadService,
    private carimageService: CarImageService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  createAddCarImageForm() {
    this.addCarImageForm = this.formBuilder.group({
      carId: [this.carId, Validators.required],
      imagePath: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = parseInt(params['carId']);
      }
    });
    this.createAddCarImageForm();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();

      formData.append('file', file);

      this.uploadService.uploadImage(formData).subscribe(
        (response) => {
          this.filePath = response.data;
          this.addCarImageForm.value["imagePath"] =this.filePath;
          this.addCarImageForm.controls.imagePath.setValue(this.filePath);
          this.toastrService.success(response.message);
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    }
  }

  addCarImage() {debugger;
    if (this.addCarImageForm.valid) {

      let carImageAddModel = Object.assign({}, this.addCarImageForm.value);

      this.carimageService.add(carImageAddModel).subscribe((response) => {
        this.toastrService.info(response.message);
      });
    } else {
      this.toastrService.error('Formunuzda geçersiz alanlar var.', 'Dikkat!');
    }
  }
}
