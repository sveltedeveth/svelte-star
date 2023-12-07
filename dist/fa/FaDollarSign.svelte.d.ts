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
export type FaDollarSignProps = typeof __propDef.props;
export type FaDollarSignEvents = typeof __propDef.events;
export type FaDollarSignSlots = typeof __propDef.slots;
export default class FaDollarSign extends SvelteComponentTyped<FaDollarSignProps, FaDollarSignEvents, FaDollarSignSlots> {
}
export {};
