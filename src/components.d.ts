/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonType } from "./components/button-component/button-component";
export namespace Components {
    interface ButtonComponent {
        /**
          * Whether to apply compact mode to the button. Default value is set to false
         */
        "compact": boolean;
        /**
          * Whether to apply menu mode to the button. Default value is set to false
         */
        "fdmenu": boolean;
        /**
          * The type of the button. Types include: 'standard' | 'positive' | 'negative' | 'attention' | 'half' | 'ghost' | 'transparent' | 'emphasized' | 'menu'. Leave empty for default (Standard button).' Default value is set to 'standard'
         */
        "fdtype": ButtonType;
        /**
          * The icon to include in the button. See the icon page for the list of icons. Setter is used to control when css class have to be rebuilt. Default value is set to ''.
         */
        "glyph": string;
        /**
          * Text rendered inside button component
         */
        "label": string;
        /**
          * Native type of button element
         */
        "type": string;
    }
    interface FdOption {
        "str": string;
    }
    interface FdSelect {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLFdOptionElement extends Components.FdOption, HTMLStencilElement {
    }
    var HTMLFdOptionElement: {
        prototype: HTMLFdOptionElement;
        new (): HTMLFdOptionElement;
    };
    interface HTMLFdSelectElement extends Components.FdSelect, HTMLStencilElement {
    }
    var HTMLFdSelectElement: {
        prototype: HTMLFdSelectElement;
        new (): HTMLFdSelectElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "fd-option": HTMLFdOptionElement;
        "fd-select": HTMLFdSelectElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        /**
          * Whether to apply compact mode to the button. Default value is set to false
         */
        "compact"?: boolean;
        /**
          * Whether to apply menu mode to the button. Default value is set to false
         */
        "fdmenu"?: boolean;
        /**
          * The type of the button. Types include: 'standard' | 'positive' | 'negative' | 'attention' | 'half' | 'ghost' | 'transparent' | 'emphasized' | 'menu'. Leave empty for default (Standard button).' Default value is set to 'standard'
         */
        "fdtype"?: ButtonType;
        /**
          * The icon to include in the button. See the icon page for the list of icons. Setter is used to control when css class have to be rebuilt. Default value is set to ''.
         */
        "glyph"?: string;
        /**
          * Text rendered inside button component
         */
        "label"?: string;
        /**
          * Native type of button element
         */
        "type"?: string;
    }
    interface FdOption {
        "str"?: string;
    }
    interface FdSelect {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "fd-option": FdOption;
        "fd-select": FdSelect;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "fd-option": LocalJSX.FdOption & JSXBase.HTMLAttributes<HTMLFdOptionElement>;
            "fd-select": LocalJSX.FdSelect & JSXBase.HTMLAttributes<HTMLFdSelectElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
