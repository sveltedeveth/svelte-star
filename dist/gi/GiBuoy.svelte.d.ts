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
export type GiBuoyProps = typeof __propDef.props;
export type GiBuoyEvents = typeof __propDef.events;
export type GiBuoySlots = typeof __propDef.slots;
export default class GiBuoy extends SvelteComponentTyped<GiBuoyProps, GiBuoyEvents, GiBuoySlots> {
}
export {};
