import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';
import { MatDialogRef } from '@angular/material'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  submitted = false;
  formulaireok;

  progress
canBeClosed = true
primaryButtonText = 'Upload'
showCancelButton = true
uploading = false
uploadSuccessful = false
  
  constructor(private apiService: ApiService,public dialogRef: MatDialogRef<AdminComponent>,private httpClient: HttpClient) { }
  
  @ViewChild('file',{static: false}) file
  public files: Set<File> = new Set()
  selectedFile: File
  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }


  ngOnInit() {
  } 

  onSubmit(form:NgForm) { 
    this.submitted = true;
    this.formulaireok = form.value;
    console.log(this.formulaireok);
    this.apiService.pushBuild(this.formulaireok);
    
    
   }
   onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

  onUpload() {
    // upload code goes here
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    
    this.httpClient.post('http://localhost:80/api/upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });






  }
}
