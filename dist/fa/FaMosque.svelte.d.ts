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
export type FaMosqueProps = typeof __propDef.props;
export type FaMosqueEvents = typeof __propDef.events;
export type FaMosqueSlots = typeof __propDef.slots;
export default class FaMosque extends SvelteComponentTyped<FaMosqueProps, FaMosqueEvents, FaMosqueSlots> {
}
export {};
