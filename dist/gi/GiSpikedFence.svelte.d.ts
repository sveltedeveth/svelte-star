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
export type GiSpikedFenceProps = typeof __propDef.props;
export type GiSpikedFenceEvents = typeof __propDef.events;
export type GiSpikedFenceSlots = typeof __propDef.slots;
export default class GiSpikedFence extends SvelteComponentTyped<GiSpikedFenceProps, GiSpikedFenceEvents, GiSpikedFenceSlots> {
}
export {};
