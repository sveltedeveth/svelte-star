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
export type GiBeholdProps = typeof __propDef.props;
export type GiBeholdEvents = typeof __propDef.events;
export type GiBeholdSlots = typeof __propDef.slots;
export default class GiBehold extends SvelteComponentTyped<GiBeholdProps, GiBeholdEvents, GiBeholdSlots> {
}
export {};
