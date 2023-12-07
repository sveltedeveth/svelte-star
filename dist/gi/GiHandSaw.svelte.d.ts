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
export type GiHandSawProps = typeof __propDef.props;
export type GiHandSawEvents = typeof __propDef.events;
export type GiHandSawSlots = typeof __propDef.slots;
export default class GiHandSaw extends SvelteComponentTyped<GiHandSawProps, GiHandSawEvents, GiHandSawSlots> {
}
export {};
