import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent {
  @Input() set Code(code: string) {
    const codeLength = code.length;
    for (let i = 0; i < codeLength; i++) {
      this._code.push(code[i]);
    }
  }

  get Code(): string[] {
    return this._code;
  }

  private _code: string[] = [];


}
