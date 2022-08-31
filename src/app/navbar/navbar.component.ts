import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { MatCardLgImage } from '@angular/material/card';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router : Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    console.log(this.isLoggedIn);

  }

  logout(): void {
    console.log("am loging out");
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(['/Login']);
  }
}
