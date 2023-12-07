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
export type FaPatreonProps = typeof __propDef.props;
export type FaPatreonEvents = typeof __propDef.events;
export type FaPatreonSlots = typeof __propDef.slots;
export default class FaPatreon extends SvelteComponentTyped<FaPatreonProps, FaPatreonEvents, FaPatreonSlots> {
}
export {};
