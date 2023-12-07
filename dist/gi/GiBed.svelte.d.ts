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
export type GiBedProps = typeof __propDef.props;
export type GiBedEvents = typeof __propDef.events;
export type GiBedSlots = typeof __propDef.slots;
export default class GiBed extends SvelteComponentTyped<GiBedProps, GiBedEvents, GiBedSlots> {
}
export {};
