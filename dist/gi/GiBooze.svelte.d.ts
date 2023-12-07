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
export type GiBoozeProps = typeof __propDef.props;
export type GiBoozeEvents = typeof __propDef.events;
export type GiBoozeSlots = typeof __propDef.slots;
export default class GiBooze extends SvelteComponentTyped<GiBoozeProps, GiBoozeEvents, GiBoozeSlots> {
}
export {};
