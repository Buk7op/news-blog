import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nb-error-message',
  template: '<div> {{messageProps}}</div>',
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string = 'Something went wrong';

  constructor() {}

  ngOnInit(): void {}
}
