import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInteface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
