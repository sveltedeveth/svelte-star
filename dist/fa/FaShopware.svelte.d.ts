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
export type FaShopwareProps = typeof __propDef.props;
export type FaShopwareEvents = typeof __propDef.events;
export type FaShopwareSlots = typeof __propDef.slots;
export default class FaShopware extends SvelteComponentTyped<FaShopwareProps, FaShopwareEvents, FaShopwareSlots> {
}
export {};
