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
export type GiBanknoteProps = typeof __propDef.props;
export type GiBanknoteEvents = typeof __propDef.events;
export type GiBanknoteSlots = typeof __propDef.slots;
export default class GiBanknote extends SvelteComponentTyped<GiBanknoteProps, GiBanknoteEvents, GiBanknoteSlots> {
}
export {};
