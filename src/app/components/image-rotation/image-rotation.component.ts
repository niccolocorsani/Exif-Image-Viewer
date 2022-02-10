import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-image-rotation',
  templateUrl: './image-rotation.component.html',
  styleUrls: ['./image-rotation.component.css']
})
export class ImageRotationComponent implements OnInit {

  ////https://github.com/exif-js/exif-js    usare l'immagine sul desktop, EXIFImage

  img: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  rotateImage(): void {
    this.img = document.getElementById('image');
    if (this.img.getAttribute("class") === 'rotate90') this.img.setAttribute('class', 'rotate180');
    else if (this.img.getAttribute("class") === 'rotate180') this.img.setAttribute('class', 'rotate270');
    else if (this.img.getAttribute("class") === 'rotate270') this.img.setAttribute('class', '');
    else this.img.setAttribute('class', 'rotate90');


  }


}
