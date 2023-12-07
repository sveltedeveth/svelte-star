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
export type GiBoltSawProps = typeof __propDef.props;
export type GiBoltSawEvents = typeof __propDef.events;
export type GiBoltSawSlots = typeof __propDef.slots;
export default class GiBoltSaw extends SvelteComponentTyped<GiBoltSawProps, GiBoltSawEvents, GiBoltSawSlots> {
}
export {};
