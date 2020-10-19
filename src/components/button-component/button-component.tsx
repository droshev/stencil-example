import { Component, h, Prop } from '@stencil/core';

export type ButtonType =
  | ''
  | 'standard'
  | 'positive'
  | 'negative'
  | 'attention'
  | 'half'
  | 'ghost'
  | 'transparent'
  | 'emphasized'
  | 'menu';


@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent {

  /**
   * Native type of button element
   */
  @Prop()
  public type = 'button';

  /** The type of the button. Types include:
   * 'standard' | 'positive' | 'negative' | 'attention' | 'half' | 'ghost' | 'transparent' | 'emphasized' | 'menu'.
   * Leave empty for default (Standard button).'
   * Default value is set to 'standard'
   */
  @Prop()
  public fdtype: ButtonType = 'standard';

  /** Text rendered inside button component */
  @Prop()
  public label: string;

  /** Whether to apply menu mode to the button. Default value is set to false */
  @Prop()
  public fdmenu = false;

  /**
   * The icon to include in the button. See the icon page for the list of icons.
   * Setter is used to control when css class have to be rebuilt.
   * Default value is set to ''.
   */
  @Prop()
  public glyph = '';

  /**
   * Whether to apply compact mode to the button.
   * Default value is set to false
   */
  @Prop()
  public compact = false;

  getClass(): string {
    return 'fd-button' +
      (this.fdtype ? ` fd-button--${this.fdtype}` : '') +
      (this.compact ? ' fd-button--compact' : '') +
      (this.fdmenu ? ' fd-button--menu' : '')
  }

  getIconClass(): string {
    return `sap-icon--${this.glyph}`;
  }


  render() {
    return (
      <button class={ this.getClass() } type={ this.type }>

        {this.label
          ? <span class="fd-button__text">{this.label}</span>
          : ''
        }

        {this.glyph
          ? <i class={this.getIconClass()} role="presentation"/>
          : ''
        }

        {this.fdmenu
          ? <i class="sap-icon--slim-arrow-down" role="presentation"/>
          : ''
        }
      </button>
    );
  }

}
