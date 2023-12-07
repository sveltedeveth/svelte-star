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
export type GiStoneBustProps = typeof __propDef.props;
export type GiStoneBustEvents = typeof __propDef.events;
export type GiStoneBustSlots = typeof __propDef.slots;
export default class GiStoneBust extends SvelteComponentTyped<GiStoneBustProps, GiStoneBustEvents, GiStoneBustSlots> {
}
export {};
