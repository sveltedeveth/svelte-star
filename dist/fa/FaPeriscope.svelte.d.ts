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
export type FaPeriscopeProps = typeof __propDef.props;
export type FaPeriscopeEvents = typeof __propDef.events;
export type FaPeriscopeSlots = typeof __propDef.slots;
export default class FaPeriscope extends SvelteComponentTyped<FaPeriscopeProps, FaPeriscopeEvents, FaPeriscopeSlots> {
}
export {};
