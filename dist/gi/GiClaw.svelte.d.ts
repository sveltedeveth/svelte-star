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
export type GiClawProps = typeof __propDef.props;
export type GiClawEvents = typeof __propDef.events;
export type GiClawSlots = typeof __propDef.slots;
export default class GiClaw extends SvelteComponentTyped<GiClawProps, GiClawEvents, GiClawSlots> {
}
export {};
