import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  
  builds ;
  

  constructor(private apiService: ApiService) { }

  ngOnInit() {

      this.apiService.getNews().subscribe((data)=>{

        console.log(data);
        this.builds = data;
        console.log(this.builds);
        
      });
  }

}
