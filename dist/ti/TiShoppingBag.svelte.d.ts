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
export type TiShoppingBagProps = typeof __propDef.props;
export type TiShoppingBagEvents = typeof __propDef.events;
export type TiShoppingBagSlots = typeof __propDef.slots;
export default class TiShoppingBag extends SvelteComponentTyped<TiShoppingBagProps, TiShoppingBagEvents, TiShoppingBagSlots> {
}
export {};
