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
export type GiPawProps = typeof __propDef.props;
export type GiPawEvents = typeof __propDef.events;
export type GiPawSlots = typeof __propDef.slots;
export default class GiPaw extends SvelteComponentTyped<GiPawProps, GiPawEvents, GiPawSlots> {
}
export {};
