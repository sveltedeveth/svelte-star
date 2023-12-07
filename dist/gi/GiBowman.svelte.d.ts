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
export type GiBowmanProps = typeof __propDef.props;
export type GiBowmanEvents = typeof __propDef.events;
export type GiBowmanSlots = typeof __propDef.slots;
export default class GiBowman extends SvelteComponentTyped<GiBowmanProps, GiBowmanEvents, GiBowmanSlots> {
}
export {};
