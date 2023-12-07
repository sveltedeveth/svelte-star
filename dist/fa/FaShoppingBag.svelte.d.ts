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
export type FaShoppingBagProps = typeof __propDef.props;
export type FaShoppingBagEvents = typeof __propDef.events;
export type FaShoppingBagSlots = typeof __propDef.slots;
export default class FaShoppingBag extends SvelteComponentTyped<FaShoppingBagProps, FaShoppingBagEvents, FaShoppingBagSlots> {
}
export {};
