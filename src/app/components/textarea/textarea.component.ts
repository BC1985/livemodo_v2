import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea
      matInput
      cdkTextareaAutosize
      #autosize="cdkTextareaAutosize"
      cdkAutosizeMinRows="1"
      cdkAutosizeMaxRows="5"
    >
    </textarea>
  `,
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
