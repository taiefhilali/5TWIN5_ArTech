import { Component, OnInit } from '@angular/core';
import { Cv } from 'app/auth/models/Cv';
import { CvService } from 'app/auth/service/cv.service';

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.scss']
})
export class CvViewComponent implements OnInit {

  selectedFile: File | null = null;
  cvs: Cv[] = [];

  constructor(private cvservice: CvService) {}

  ngOnInit() {
    this.fetchCVs();
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadCv() {
    if (this.selectedFile) {
      this.cvservice.uploadCv(this.selectedFile).subscribe(
        (response) => {
          console.log('CV uploaded successfully:', response);
          this.fetchCVs(); // Refresh the list of CVs after uploading

          // Reload the current page
          window.location.reload();
        },
        (error) => {
          window.location.reload();

          console.error('Error uploading CV:', error);
        }
      );
    }
  }

  fetchCVs() {
    this.cvservice.getCVs().subscribe(
      (cvs) => {
        this.cvs = cvs;
      },
      (error) => {
        console.error('Error fetching CVs:', error);
      }
    );
  }
}