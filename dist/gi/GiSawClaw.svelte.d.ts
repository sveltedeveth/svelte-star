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
export type GiSawClawProps = typeof __propDef.props;
export type GiSawClawEvents = typeof __propDef.events;
export type GiSawClawSlots = typeof __propDef.slots;
export default class GiSawClaw extends SvelteComponentTyped<GiSawClawProps, GiSawClawEvents, GiSawClawSlots> {
}
export {};
