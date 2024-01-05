import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  showContent = signal(true);
  grade = signal<Grade>('A');
  frameworks = signal(['Angular', 'React', 'Vue', 'NestJs']);
  frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);

    this.grade.update((value) => {
      if (value === 'A') {
        return 'B';
      } else if (value === 'B') {
        return 'F';
      } else {
        return 'A';
      }
    });
  }
}
