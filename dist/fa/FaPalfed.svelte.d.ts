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
export type FaPalfedProps = typeof __propDef.props;
export type FaPalfedEvents = typeof __propDef.events;
export type FaPalfedSlots = typeof __propDef.slots;
export default class FaPalfed extends SvelteComponentTyped<FaPalfedProps, FaPalfedEvents, FaPalfedSlots> {
}
export {};
