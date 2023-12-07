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
export type MdShoppingCartProps = typeof __propDef.props;
export type MdShoppingCartEvents = typeof __propDef.events;
export type MdShoppingCartSlots = typeof __propDef.slots;
export default class MdShoppingCart extends SvelteComponentTyped<MdShoppingCartProps, MdShoppingCartEvents, MdShoppingCartSlots> {
}
export {};
