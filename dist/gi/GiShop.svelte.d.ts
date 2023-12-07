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
export type GiShopProps = typeof __propDef.props;
export type GiShopEvents = typeof __propDef.events;
export type GiShopSlots = typeof __propDef.slots;
export default class GiShop extends SvelteComponentTyped<GiShopProps, GiShopEvents, GiShopSlots> {
}
export {};
