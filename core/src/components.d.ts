/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Breakpoint } from "./utils/breakpoints";
import { Placement } from "@floating-ui/dom";
export namespace Components {
    interface CatAlert {
        /**
          * The color palette of the alert.
         */
        "color": 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    }
    interface CatBadge {
        /**
          * The color palette of the badge.
         */
        "color": 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Draw attention to the badge with a subtle animation.
         */
        "pulse": boolean;
        /**
          * Use round badge edges.
         */
        "round": boolean;
        /**
          * The size of the badge.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the badge.
         */
        "variant": 'filled' | 'outlined';
    }
    interface CatButton {
        /**
          * Adds accessible label for the button that is only shown for screen readers. Typically, this label text replaces the visible text on the button for users who use assistive technology.
         */
        "a11yLabel"?: string;
        /**
          * Adds a unique identifier for the button. Please note that with this particular component this ID is added inside the web component. If you need an ID on the HTML element, use the regular `id` attribute instead.
         */
        "buttonId"?: string;
        /**
          * The color palette of the button.
         */
        "color": 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Specifies that the button should be disabled. A disabled button is unusable and un-clickable. Corresponds with the native HTML disabled attribute.
         */
        "disabled": boolean;
        /**
          * Ellipse overflowing button content.
         */
        "ellipsed": boolean;
        /**
          * The name of an icon to be displayed in the button.
         */
        "icon"?: string;
        /**
          * Hide the actual button content and only display the icon.
         */
        "iconOnly": boolean | Breakpoint;
        /**
          * Display the icon as a suffix.
         */
        "iconSuffix": boolean;
        /**
          * Displays the button in a loading state with a spinner. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "loading": boolean;
        /**
          * The name of the button, which gets paired with the button's value when submitted as part of a form. Corresponds with the native HTML name attribute.
         */
        "name"?: string;
        /**
          * Use round button edges.
         */
        "round": boolean;
        /**
          * Sets focus on the button. Use this method instead of `button.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * The size of the button.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * Allows the button to submit a form.
         */
        "submit": boolean;
        /**
          * A destination to link to, rendered in the href attribute of a link.
         */
        "url"?: string;
        /**
          * Specifies where to open the linked document.
         */
        "urlTarget"?: '_blank' | '_self';
        /**
          * The value of the button, which gets paired with the button's name when submitted as part of a form. Corresponds with the native HTML value attribute.
         */
        "value"?: string;
        /**
          * The rendering style of the button.
         */
        "variant": 'filled' | 'outlined' | 'text';
    }
    interface CatIcon {
        /**
          * Adds accessible label for the icon that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The name of the icon.
         */
        "icon": string;
        /**
          * The size of the icon.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatMenu {
        /**
          * The placement of the menu.
         */
        "placement": Placement;
    }
    interface CatSkeleton {
        /**
          * The animation style of the skeleton.
         */
        "effect": 'plain' | 'sheen' | 'pulse';
        /**
          * The number of text lines to be rendered for "head" and "body" variants. Defaults to 1 for "head" and 3 for "body". Will be ignored for other variants.
         */
        "lines"?: number;
        /**
          * The size of the skeleton. If the variant is set to "head", the size values "xs" to "xl" translate to the head levels `h1` to `h5`.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the skeleton.
         */
        "variant": 'rectangle' | 'square' | 'circle' | 'head' | 'body';
    }
    interface CatSpinner {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The size of the spinner.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
}
declare global {
    interface HTMLCatAlertElement extends Components.CatAlert, HTMLStencilElement {
    }
    var HTMLCatAlertElement: {
        prototype: HTMLCatAlertElement;
        new (): HTMLCatAlertElement;
    };
    interface HTMLCatBadgeElement extends Components.CatBadge, HTMLStencilElement {
    }
    var HTMLCatBadgeElement: {
        prototype: HTMLCatBadgeElement;
        new (): HTMLCatBadgeElement;
    };
    interface HTMLCatButtonElement extends Components.CatButton, HTMLStencilElement {
    }
    var HTMLCatButtonElement: {
        prototype: HTMLCatButtonElement;
        new (): HTMLCatButtonElement;
    };
    interface HTMLCatIconElement extends Components.CatIcon, HTMLStencilElement {
    }
    var HTMLCatIconElement: {
        prototype: HTMLCatIconElement;
        new (): HTMLCatIconElement;
    };
    interface HTMLCatMenuElement extends Components.CatMenu, HTMLStencilElement {
    }
    var HTMLCatMenuElement: {
        prototype: HTMLCatMenuElement;
        new (): HTMLCatMenuElement;
    };
    interface HTMLCatSkeletonElement extends Components.CatSkeleton, HTMLStencilElement {
    }
    var HTMLCatSkeletonElement: {
        prototype: HTMLCatSkeletonElement;
        new (): HTMLCatSkeletonElement;
    };
    interface HTMLCatSpinnerElement extends Components.CatSpinner, HTMLStencilElement {
    }
    var HTMLCatSpinnerElement: {
        prototype: HTMLCatSpinnerElement;
        new (): HTMLCatSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "cat-alert": HTMLCatAlertElement;
        "cat-badge": HTMLCatBadgeElement;
        "cat-button": HTMLCatButtonElement;
        "cat-icon": HTMLCatIconElement;
        "cat-menu": HTMLCatMenuElement;
        "cat-skeleton": HTMLCatSkeletonElement;
        "cat-spinner": HTMLCatSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface CatAlert {
        /**
          * The color palette of the alert.
         */
        "color"?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    }
    interface CatBadge {
        /**
          * The color palette of the badge.
         */
        "color"?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Draw attention to the badge with a subtle animation.
         */
        "pulse"?: boolean;
        /**
          * Use round badge edges.
         */
        "round"?: boolean;
        /**
          * The size of the badge.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the badge.
         */
        "variant"?: 'filled' | 'outlined';
    }
    interface CatButton {
        /**
          * Adds accessible label for the button that is only shown for screen readers. Typically, this label text replaces the visible text on the button for users who use assistive technology.
         */
        "a11yLabel"?: string;
        /**
          * Adds a unique identifier for the button. Please note that with this particular component this ID is added inside the web component. If you need an ID on the HTML element, use the regular `id` attribute instead.
         */
        "buttonId"?: string;
        /**
          * The color palette of the button.
         */
        "color"?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Specifies that the button should be disabled. A disabled button is unusable and un-clickable. Corresponds with the native HTML disabled attribute.
         */
        "disabled"?: boolean;
        /**
          * Ellipse overflowing button content.
         */
        "ellipsed"?: boolean;
        /**
          * The name of an icon to be displayed in the button.
         */
        "icon"?: string;
        /**
          * Hide the actual button content and only display the icon.
         */
        "iconOnly"?: boolean | Breakpoint;
        /**
          * Display the icon as a suffix.
         */
        "iconSuffix"?: boolean;
        /**
          * Displays the button in a loading state with a spinner. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "loading"?: boolean;
        /**
          * The name of the button, which gets paired with the button's value when submitted as part of a form. Corresponds with the native HTML name attribute.
         */
        "name"?: string;
        /**
          * Emitted when the button loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the button is clicked.
         */
        "onCatClick"?: (event: CustomEvent<MouseEvent>) => void;
        /**
          * Emitted when the button received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Use round button edges.
         */
        "round"?: boolean;
        /**
          * The size of the button.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * Allows the button to submit a form.
         */
        "submit"?: boolean;
        /**
          * A destination to link to, rendered in the href attribute of a link.
         */
        "url"?: string;
        /**
          * Specifies where to open the linked document.
         */
        "urlTarget"?: '_blank' | '_self';
        /**
          * The value of the button, which gets paired with the button's name when submitted as part of a form. Corresponds with the native HTML value attribute.
         */
        "value"?: string;
        /**
          * The rendering style of the button.
         */
        "variant"?: 'filled' | 'outlined' | 'text';
    }
    interface CatIcon {
        /**
          * Adds accessible label for the icon that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The name of the icon.
         */
        "icon"?: string;
        /**
          * The size of the icon.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatMenu {
        /**
          * Emitted when the menu is closed.
         */
        "onCatClose"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the menu is opened.
         */
        "onCatOpen"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * The placement of the menu.
         */
        "placement"?: Placement;
    }
    interface CatSkeleton {
        /**
          * The animation style of the skeleton.
         */
        "effect"?: 'plain' | 'sheen' | 'pulse';
        /**
          * The number of text lines to be rendered for "head" and "body" variants. Defaults to 1 for "head" and 3 for "body". Will be ignored for other variants.
         */
        "lines"?: number;
        /**
          * The size of the skeleton. If the variant is set to "head", the size values "xs" to "xl" translate to the head levels `h1` to `h5`.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the skeleton.
         */
        "variant"?: 'rectangle' | 'square' | 'circle' | 'head' | 'body';
    }
    interface CatSpinner {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The size of the spinner.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface IntrinsicElements {
        "cat-alert": CatAlert;
        "cat-badge": CatBadge;
        "cat-button": CatButton;
        "cat-icon": CatIcon;
        "cat-menu": CatMenu;
        "cat-skeleton": CatSkeleton;
        "cat-spinner": CatSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cat-alert": LocalJSX.CatAlert & JSXBase.HTMLAttributes<HTMLCatAlertElement>;
            "cat-badge": LocalJSX.CatBadge & JSXBase.HTMLAttributes<HTMLCatBadgeElement>;
            "cat-button": LocalJSX.CatButton & JSXBase.HTMLAttributes<HTMLCatButtonElement>;
            "cat-icon": LocalJSX.CatIcon & JSXBase.HTMLAttributes<HTMLCatIconElement>;
            "cat-menu": LocalJSX.CatMenu & JSXBase.HTMLAttributes<HTMLCatMenuElement>;
            "cat-skeleton": LocalJSX.CatSkeleton & JSXBase.HTMLAttributes<HTMLCatSkeletonElement>;
            "cat-spinner": LocalJSX.CatSpinner & JSXBase.HTMLAttributes<HTMLCatSpinnerElement>;
        }
    }
}
