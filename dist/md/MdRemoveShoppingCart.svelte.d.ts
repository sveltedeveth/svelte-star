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
export type MdRemoveShoppingCartProps = typeof __propDef.props;
export type MdRemoveShoppingCartEvents = typeof __propDef.events;
export type MdRemoveShoppingCartSlots = typeof __propDef.slots;
export default class MdRemoveShoppingCart extends SvelteComponentTyped<MdRemoveShoppingCartProps, MdRemoveShoppingCartEvents, MdRemoveShoppingCartSlots> {
}
export {};
