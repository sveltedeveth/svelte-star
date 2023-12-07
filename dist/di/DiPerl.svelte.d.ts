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
export type DiPerlProps = typeof __propDef.props;
export type DiPerlEvents = typeof __propDef.events;
export type DiPerlSlots = typeof __propDef.slots;
export default class DiPerl extends SvelteComponentTyped<DiPerlProps, DiPerlEvents, DiPerlSlots> {
}
export {};
