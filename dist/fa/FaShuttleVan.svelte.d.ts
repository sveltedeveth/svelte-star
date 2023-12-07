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
export type FaShuttleVanProps = typeof __propDef.props;
export type FaShuttleVanEvents = typeof __propDef.events;
export type FaShuttleVanSlots = typeof __propDef.slots;
export default class FaShuttleVan extends SvelteComponentTyped<FaShuttleVanProps, FaShuttleVanEvents, FaShuttleVanSlots> {
}
export {};
