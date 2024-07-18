import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FetchData';
  users = new Array<any>();
  constructor(private userService:UserService){}
    ngOnInit():void {
      this.userService.getUsers().subscribe((data)=>{
        this.users = data;
      })
    }
  
}
