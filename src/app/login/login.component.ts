import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  isFocused: boolean = false;
  someValue !: string;


  form: any = {
    username: null,
    password: null
  };

  formValue!:FormGroup; 

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  //roles: string[] = [];
  constructor(private router : Router, private formbuilder:FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  /*   this.formValue=this.formbuilder.group({
      email: [''],
      password: ['']
    })  */

    

  
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
     // this.roles = this.tokenStorage.getUser().roles;
    }

    if(this.isLoggedIn){
      
      this.router.navigate(['/MetersList']);
    }

    
    
  }


  onSubmit(): void {
    console.log("hello");
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
       // this.roles = this.tokenStorage.getUser().roles;
       this.reloadPage();
      // this.router.navigate(['/MetersList']);

        console.log("login success")
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log("login FAiled")

      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }


  login(
  ){
    console.log("login")}

}
