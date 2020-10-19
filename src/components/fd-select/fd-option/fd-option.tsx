import { Component, Event, h, EventEmitter, Element, Prop } from '@stencil/core';

@Component({
  tag: 'fd-option',
  styleUrl: './fd-option.css',
  shadow: true,
})
export class FdOption {

  @Event()
  keyDown: EventEmitter<KeyboardEvent>

  @Event()
  click: EventEmitter<KeyboardEvent>

  @Element()
  host: HTMLElement;

  @Prop()
  str: string = '1321312';

  private _liElement?: HTMLElement;

  componentDidLoad(): void {
    this.host.addEventListener('focus', () => {
      console.log(this._liElement);
      console.log('focused');
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
