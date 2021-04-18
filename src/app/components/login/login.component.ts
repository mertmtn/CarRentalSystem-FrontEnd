import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router: Router,private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

createLoginForm(){
  this.loginForm=this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required]
  })
}

login(){
  if(this.loginForm.valid){
    let loginModel = Object.assign({},this.loginForm.value)
    this.authService.login(loginModel).subscribe(response=>{
      localStorage.setItem("token",response.data.token)
      //this.router.navigateByUrl('app-root');
      //TODO: LOGİNDEN SONRA YÖNLENDİRİLECEK ŞABLON COMPONENT BELİRLENECEK
      this.toastrService.success(response.message);
    },responseError=>{
      this.toastrService.error(responseError.error);
    })
  }
}

}
