import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaShoppingCartProps = typeof __propDef.props;
export type FaShoppingCartEvents = typeof __propDef.events;
export type FaShoppingCartSlots = typeof __propDef.slots;
export default class FaShoppingCart extends SvelteComponentTyped<FaShoppingCartProps, FaShoppingCartEvents, FaShoppingCartSlots> {
}
export {};
