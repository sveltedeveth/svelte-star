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
export type MdShopTwoProps = typeof __propDef.props;
export type MdShopTwoEvents = typeof __propDef.events;
export type MdShopTwoSlots = typeof __propDef.slots;
export default class MdShopTwo extends SvelteComponentTyped<MdShopTwoProps, MdShopTwoEvents, MdShopTwoSlots> {
}
export {};
