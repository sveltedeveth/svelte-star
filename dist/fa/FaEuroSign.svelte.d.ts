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
export type FaEuroSignProps = typeof __propDef.props;
export type FaEuroSignEvents = typeof __propDef.events;
export type FaEuroSignSlots = typeof __propDef.slots;
export default class FaEuroSign extends SvelteComponentTyped<FaEuroSignProps, FaEuroSignEvents, FaEuroSignSlots> {
}
export {};
