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
export type FaDribbbleProps = typeof __propDef.props;
export type FaDribbbleEvents = typeof __propDef.events;
export type FaDribbbleSlots = typeof __propDef.slots;
export default class FaDribbble extends SvelteComponentTyped<FaDribbbleProps, FaDribbbleEvents, FaDribbbleSlots> {
}
export {};
