import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, FormsModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel implements OnInit{

  username = '';
  password = '';
   login() {
    if (this.username === 'CNH_admin') {
      if(this.password === 'dipakshi'){
      this.router.navigate(['/add-details']);
      }else{
        alert('Invalid Password')
        
      }
    } else {
      alert('Invalid Username');
    }
  }
  images = [
    'https://back.3blmedia.com/sites/default/files/inline-images/3-2024-AE50_CNH-Industrial_011824.jpg',
    'https://preview.thenewsmarket.com/Previews/CNHA/StillAssets/1920x1080/568678_v2.jpg',
    'https://preview.thenewsmarket.com/Previews/CNHA/StillAssets/1920x1080/572918_v2.jpg'
  ];
 currentIndex = 0;
  currentImage = this.images[0];
  intervalId: any;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.currentImage = this.images[this.currentIndex];

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.currentImage = this.images[this.currentIndex];

        this.ngZone.run(() => {
          this.cdr.detectChanges();
        });

        console.log('Current image:', this.currentImage);
      }, 4000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}