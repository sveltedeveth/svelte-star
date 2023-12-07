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
export type IoLogoDribbbleProps = typeof __propDef.props;
export type IoLogoDribbbleEvents = typeof __propDef.events;
export type IoLogoDribbbleSlots = typeof __propDef.slots;
export default class IoLogoDribbble extends SvelteComponentTyped<IoLogoDribbbleProps, IoLogoDribbbleEvents, IoLogoDribbbleSlots> {
}
export {};
