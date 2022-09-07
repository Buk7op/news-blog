import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: 'foo',
    description: 'bar',
    body: 'baz',
    tagList: ['123'],
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(res: any): void {
    console.log('onSubmit in parent', res);
  }
}
