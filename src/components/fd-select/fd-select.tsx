import { Component, Element, h, State } from '@stencil/core';

@Component({
  tag: 'fd-select',
  styleUrl: 'fd-select.css',
  shadow: true,
})
export class FdSelect {

  @Element() host: HTMLDivElement;

  private _children: HTMLElement[];

  componentDidLoad(): void {
    this._refreshListeners();
  }

  render() {
    return (
      <div class="fd-popover">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div class="fd-select__control">
              <span class="fd-select__text-content">Select</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                  <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </div>
          </div>
        </div>

        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown">
          <ul class="fd-list fd-list--dropdown fd-list--compact">
            <slot></slot>
          </ul>
        </div>
      </div>
    );
  }

  private _refreshListeners(): void {
    for (let i = 0; i < this.host.children.length; i++) {
      this._handleElementClick(this.host.children.item(i));
    }
  }

  private _handleElementClick(element: any): void {
    element.addEventListener('click', () => {
      element.focus();
      console.log(element);
    });
  }

  private _handleElementKeyDown(element: Element, index: number): void {

  }

}
