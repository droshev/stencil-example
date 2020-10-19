import { Component, Event, h, EventEmitter, Element } from '@stencil/core';

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

  componentDidLoad(): void {
    this.host.addEventListener('focus', () =>
      console.log(this.host.getElementsByTagName('li')[0])
    );
  }

  render() {
    return (
      <li class="fd-list__item" tabindex="0">
        <span class="fd-list__title">
          <slot></slot>
        </span>
      </li>
    );
  }

}
