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
export type GiCircularSawProps = typeof __propDef.props;
export type GiCircularSawEvents = typeof __propDef.events;
export type GiCircularSawSlots = typeof __propDef.slots;
export default class GiCircularSaw extends SvelteComponentTyped<GiCircularSawProps, GiCircularSawEvents, GiCircularSawSlots> {
}
export {};
