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
export type GiBasketballBasketProps = typeof __propDef.props;
export type GiBasketballBasketEvents = typeof __propDef.events;
export type GiBasketballBasketSlots = typeof __propDef.slots;
export default class GiBasketballBasket extends SvelteComponentTyped<GiBasketballBasketProps, GiBasketballBasketEvents, GiBasketballBasketSlots> {
}
export {};
