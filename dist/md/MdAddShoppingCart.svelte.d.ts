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
export type MdAddShoppingCartProps = typeof __propDef.props;
export type MdAddShoppingCartEvents = typeof __propDef.events;
export type MdAddShoppingCartSlots = typeof __propDef.slots;
export default class MdAddShoppingCart extends SvelteComponentTyped<MdAddShoppingCartProps, MdAddShoppingCartEvents, MdAddShoppingCartSlots> {
}
export {};
