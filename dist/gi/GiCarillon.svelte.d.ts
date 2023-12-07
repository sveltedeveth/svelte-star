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
export type GiCarillonProps = typeof __propDef.props;
export type GiCarillonEvents = typeof __propDef.events;
export type GiCarillonSlots = typeof __propDef.slots;
export default class GiCarillon extends SvelteComponentTyped<GiCarillonProps, GiCarillonEvents, GiCarillonSlots> {
}
export {};
