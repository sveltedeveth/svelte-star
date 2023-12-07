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
export type GiShoppingCartProps = typeof __propDef.props;
export type GiShoppingCartEvents = typeof __propDef.events;
export type GiShoppingCartSlots = typeof __propDef.slots;
export default class GiShoppingCart extends SvelteComponentTyped<GiShoppingCartProps, GiShoppingCartEvents, GiShoppingCartSlots> {
}
export {};
