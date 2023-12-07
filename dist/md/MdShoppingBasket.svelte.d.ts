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
export type MdShoppingBasketProps = typeof __propDef.props;
export type MdShoppingBasketEvents = typeof __propDef.events;
export type MdShoppingBasketSlots = typeof __propDef.slots;
export default class MdShoppingBasket extends SvelteComponentTyped<MdShoppingBasketProps, MdShoppingBasketEvents, MdShoppingBasketSlots> {
}
export {};
