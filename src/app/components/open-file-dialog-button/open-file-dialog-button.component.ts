import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import * as ExifReader from 'exifreader';


// Some of the possible data of the exif-image
export class ImageDetail {

  data?: string;
  date?: Date;
  imageHeight?: number;
  imageWidth?: number;
  gpsLatitude = 30;
  gpsLongitude = 40;
}

@Component({
  selector: 'app-open-file-dialog-button',
  templateUrl: './open-file-dialog-button.component.html'})
export class OpenFileDialogButtonComponent implements OnInit {


  //// https://medium.com/@amcdnl/file-uploads-with-angular-reactive-forms-960fd0b34cb5

  img: any;
  my_image = new ImageDetail();
  tags: any;


  formGroup = this.fb.group({
    file: [null, Validators.required]
  });


  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }




  onFileChangeImage(event: any): void {

    const reader = new FileReader();

    let arrayBuffer: any;

    if (event.target.files && event.target.files.length) {


      const [file] = event.target.files;

      reader.readAsDataURL(file);

      this.img = document.getElementById('image');

      reader.onload = () => {
        arrayBuffer = reader.result;
        this.tags = ExifReader.load(arrayBuffer);
        this.tags.then((data: any) => {
            this.my_image.imageHeight = data['Image Height'].description;
            this.my_image.imageWidth = data['Image Width'].description;
            if (data.GPSLatitude) {
              this.my_image.gpsLatitude = data.GPSLatitude.description;
            }
            if (data.GPSLongitude) {
              this.my_image.gpsLongitude = data.GPSLongitude.description;
            }
          console.log("MyImage")
          console.log(this.my_image)
        })
        if (typeof reader.result === 'string') {
          this.img.setAttribute('src', reader.result);
        }
        this.formGroup.patchValue({
          file: reader.result
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }


}
