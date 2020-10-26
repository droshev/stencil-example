import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'fd-option',
  styleUrl: './fd-option.css',
  shadow: true,
})
export class FdOption {
  @Element()
  host: HTMLElement;

  @Prop()
  str: string = '1321312';

  private _liElement?: HTMLElement;

  componentDidLoad(): void {
    this.host.addEventListener('focus', () => {
      this._liElement.focus();
    });
  }

  render() {
    return (
      <li class="fd-list__item" tabindex="0" ref={el => this._liElement = el as HTMLElement}>
        <span class="fd-list__title">
          <slot></slot>
        </span>
      </li>
    );
  }

}
