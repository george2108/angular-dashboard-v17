import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {
  frameworkAsSignal = signal({
    name: 'angular',
    releaseDate: 2016,
  });
  frameworkAsProperty = {
    name: 'angular',
    releaseDate: 2016,
  };
  currentFramework = computed(
    () => `Change detaction - ${this.frameworkAsSignal().name}`
  );

  constructor() {
    setTimeout(() => {
      this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({ ...value, name: 'React' }));
      console.log('pasaron 3 segundos');
    }, 3000);
  }
}
