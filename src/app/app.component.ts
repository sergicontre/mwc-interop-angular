import { AfterViewInit, Component, ElementRef } from '@angular/core';
import '@material/mwc-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private elementRef:ElementRef) {}

  sliderValue = 5;

  ngOnInit() { 
    //this.elementRef.nativeElement.querySelector('mwc-slider').value = this.sliderValue;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('mwc-slider')
                                  .addEventListener('input', this.onSlide.bind(this));
  }

  onSlide(event) {
    this.sliderValue = event.detail.value;
  }

}
