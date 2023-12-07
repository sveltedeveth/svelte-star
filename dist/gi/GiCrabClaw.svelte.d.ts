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
export type GiCrabClawProps = typeof __propDef.props;
export type GiCrabClawEvents = typeof __propDef.events;
export type GiCrabClawSlots = typeof __propDef.slots;
export default class GiCrabClaw extends SvelteComponentTyped<GiCrabClawProps, GiCrabClawEvents, GiCrabClawSlots> {
}
export {};
