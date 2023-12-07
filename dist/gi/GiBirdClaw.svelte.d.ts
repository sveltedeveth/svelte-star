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
export type GiBirdClawProps = typeof __propDef.props;
export type GiBirdClawEvents = typeof __propDef.events;
export type GiBirdClawSlots = typeof __propDef.slots;
export default class GiBirdClaw extends SvelteComponentTyped<GiBirdClawProps, GiBirdClawEvents, GiBirdClawSlots> {
}
export {};
