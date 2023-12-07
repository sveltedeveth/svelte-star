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
export type FaItunesProps = typeof __propDef.props;
export type FaItunesEvents = typeof __propDef.events;
export type FaItunesSlots = typeof __propDef.slots;
export default class FaItunes extends SvelteComponentTyped<FaItunesProps, FaItunesEvents, FaItunesSlots> {
}
export {};
