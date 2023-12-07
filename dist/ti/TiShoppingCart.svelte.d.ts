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
export type TiShoppingCartProps = typeof __propDef.props;
export type TiShoppingCartEvents = typeof __propDef.events;
export type TiShoppingCartSlots = typeof __propDef.slots;
export default class TiShoppingCart extends SvelteComponentTyped<TiShoppingCartProps, TiShoppingCartEvents, TiShoppingCartSlots> {
}
export {};
