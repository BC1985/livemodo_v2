import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  @Output() closeSideNav: EventEmitter<void>= new EventEmitter<void>(); 
  opened: boolean;

  onCloseSideNav() {
    this.opened = false
    this.closeSideNav.emit();
  }
}
