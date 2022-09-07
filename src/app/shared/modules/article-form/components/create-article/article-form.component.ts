import { Component, Input, OnInit } from '@angular/core';
import { ArticleInputInteface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'nb-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInteface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorProps: BackendErrorInterface | null;
  constructor() {}

  ngOnInit(): void {}
}
