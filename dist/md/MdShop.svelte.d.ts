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
export type MdShopProps = typeof __propDef.props;
export type MdShopEvents = typeof __propDef.events;
export type MdShopSlots = typeof __propDef.slots;
export default class MdShop extends SvelteComponentTyped<MdShopProps, MdShopEvents, MdShopSlots> {
}
export {};
