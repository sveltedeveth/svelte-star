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
export type GiBurningPassionProps = typeof __propDef.props;
export type GiBurningPassionEvents = typeof __propDef.events;
export type GiBurningPassionSlots = typeof __propDef.slots;
export default class GiBurningPassion extends SvelteComponentTyped<GiBurningPassionProps, GiBurningPassionEvents, GiBurningPassionSlots> {
}
export {};
