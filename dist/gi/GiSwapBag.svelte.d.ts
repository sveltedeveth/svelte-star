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
export type GiSwapBagProps = typeof __propDef.props;
export type GiSwapBagEvents = typeof __propDef.events;
export type GiSwapBagSlots = typeof __propDef.slots;
export default class GiSwapBag extends SvelteComponentTyped<GiSwapBagProps, GiSwapBagEvents, GiSwapBagSlots> {
}
export {};
