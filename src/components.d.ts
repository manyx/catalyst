/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CatDummy {
        "logNum": (data: number) => Promise<void>;
        "logString": (data: string) => Promise<void>;
        "propBool": boolean;
        "propBoolArr": boolean[];
        "propNum": number;
        "propNumArr": number[];
        "propObj": object;
        "propObjArr": object[];
        "propStr": string;
        "propStrArr": string[];
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
    interface HTMLCatDummyElement extends Components.CatDummy, HTMLStencilElement {
    }
    var HTMLCatDummyElement: {
        prototype: HTMLCatDummyElement;
        new (): HTMLCatDummyElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "cat-dummy": HTMLCatDummyElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CatDummy {
        "onEventNum"?: (event: CustomEvent<number>) => void;
        "onEventStr"?: (event: CustomEvent<string>) => void;
        "propBool"?: boolean;
        "propBoolArr"?: boolean[];
        "propNum"?: number;
        "propNumArr"?: number[];
        "propObj"?: object;
        "propObjArr"?: object[];
        "propStr"?: string;
        "propStrArr"?: string[];
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
        "cat-dummy": CatDummy;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cat-dummy": LocalJSX.CatDummy & JSXBase.HTMLAttributes<HTMLCatDummyElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
