import { Component, Element, h, State } from '@stencil/core';
import { Components } from '../../components';
import FdOption = Components.FdOption;

@Component({
  tag: 'fd-select',
  styleUrl: 'fd-select.css',
  shadow: true,
})
export class FdSelect {

  @Element() host: HTMLDivElement;

  option: FdOption

  value: string = '';

  @State()
  displayedOptionChosen: string = '';

  @State()
  open: boolean = false;

  componentDidLoad(): void {
    this._refreshListeners();
    console.log(this.option);
  }

  handleControlClick(): void {
    this.open = !this.open
  }

  render() {
    return (
      <div class="fd-popover">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div class="fd-select__control" onClick={() => this.handleControlClick()}>
              <span class="fd-select__text-content">{this.displayedOptionChosen}</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                  <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </div>
          </div>
        </div>

        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden={this.open ? "false" : "true"}>
          <ul class="fd-list fd-list--dropdown fd-list--compact">
            <slot></slot>
            {/* Equivalent for ViewChild()*/}
            {/*<fd-option ref={el => this.option = el as FdOption}>123123</fd-option>*/}
          </ul>
        </div>
      </div>
    );
  }

  private _refreshListeners(): void {
    for (let i = 0; i < this.host.children.length; i++) {
      this._handleElementClick(this._getElement(i));
      this._handleElementKeyDown(this._getElement(i));
    }
  }

  private _handleElementClick(element: HTMLElement): void {
    element.addEventListener('click', () => {
      this._pickOption(element);
    });
  }

  private _handleElementKeyDown(element: HTMLElement): void {
    element.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === ' ') {
        this._pickOption(element);
      }
    });
  }

  private _getElement(index: number): HTMLElement {
    return this.host.children.item(index) as HTMLElement;
  }

  private _pickOption(element: HTMLElement): void {
    this.value = element.getAttribute('value')
    this.displayedOptionChosen = element.innerText;
    this.open = !this.open;
  }

}
