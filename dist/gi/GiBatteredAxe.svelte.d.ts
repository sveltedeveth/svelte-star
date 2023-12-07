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
export type GiBatteredAxeProps = typeof __propDef.props;
export type GiBatteredAxeEvents = typeof __propDef.events;
export type GiBatteredAxeSlots = typeof __propDef.slots;
export default class GiBatteredAxe extends SvelteComponentTyped<GiBatteredAxeProps, GiBatteredAxeEvents, GiBatteredAxeSlots> {
}
export {};
