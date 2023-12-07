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
export type GiDiscGolfBasketProps = typeof __propDef.props;
export type GiDiscGolfBasketEvents = typeof __propDef.events;
export type GiDiscGolfBasketSlots = typeof __propDef.slots;
export default class GiDiscGolfBasket extends SvelteComponentTyped<GiDiscGolfBasketProps, GiDiscGolfBasketEvents, GiDiscGolfBasketSlots> {
}
export {};
