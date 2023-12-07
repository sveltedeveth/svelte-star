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
export type FaShoppingBasketProps = typeof __propDef.props;
export type FaShoppingBasketEvents = typeof __propDef.events;
export type FaShoppingBasketSlots = typeof __propDef.slots;
export default class FaShoppingBasket extends SvelteComponentTyped<FaShoppingBasketProps, FaShoppingBasketEvents, FaShoppingBasketSlots> {
}
export {};
