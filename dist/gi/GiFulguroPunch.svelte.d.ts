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
export type GiFulguroPunchProps = typeof __propDef.props;
export type GiFulguroPunchEvents = typeof __propDef.events;
export type GiFulguroPunchSlots = typeof __propDef.slots;
export default class GiFulguroPunch extends SvelteComponentTyped<GiFulguroPunchProps, GiFulguroPunchEvents, GiFulguroPunchSlots> {
}
export {};
