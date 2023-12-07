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
export type GiSpikedTailProps = typeof __propDef.props;
export type GiSpikedTailEvents = typeof __propDef.events;
export type GiSpikedTailSlots = typeof __propDef.slots;
export default class GiSpikedTail extends SvelteComponentTyped<GiSpikedTailProps, GiSpikedTailEvents, GiSpikedTailSlots> {
}
export {};
