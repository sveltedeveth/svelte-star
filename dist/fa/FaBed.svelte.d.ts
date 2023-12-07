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
export type FaBedProps = typeof __propDef.props;
export type FaBedEvents = typeof __propDef.events;
export type FaBedSlots = typeof __propDef.slots;
export default class FaBed extends SvelteComponentTyped<FaBedProps, FaBedEvents, FaBedSlots> {
}
export {};
