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
export type GiMidnightClawProps = typeof __propDef.props;
export type GiMidnightClawEvents = typeof __propDef.events;
export type GiMidnightClawSlots = typeof __propDef.slots;
export default class GiMidnightClaw extends SvelteComponentTyped<GiMidnightClawProps, GiMidnightClawEvents, GiMidnightClawSlots> {
}
export {};
