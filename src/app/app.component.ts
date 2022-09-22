import { ChangeDetectionStrategy, Component } from '@angular/core';
import { defaultEditorColors } from '@taiga-ui/addon-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  color = `#ffdd2d`;
	 
  readonly palette = defaultEditorColors;
}
