import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewComment } from '../../../../core/models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class CommentFormComponent {
  @Input({ required: true }) postId!: number;
  @Input() submitting = false;
  @Output() addComment = new EventEmitter<NewComment>();
  @Output() cancel = new EventEmitter<void>();

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    body: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private readonly fb: FormBuilder) {}

  submit(): void {
    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.addComment.emit({ postId: this.postId, ...value });
    this.form.reset();
  }
}
