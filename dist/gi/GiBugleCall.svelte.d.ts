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
export type GiBugleCallProps = typeof __propDef.props;
export type GiBugleCallEvents = typeof __propDef.events;
export type GiBugleCallSlots = typeof __propDef.slots;
export default class GiBugleCall extends SvelteComponentTyped<GiBugleCallProps, GiBugleCallEvents, GiBugleCallSlots> {
}
export {};
