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
export type FaSpaProps = typeof __propDef.props;
export type FaSpaEvents = typeof __propDef.events;
export type FaSpaSlots = typeof __propDef.slots;
export default class FaSpa extends SvelteComponentTyped<FaSpaProps, FaSpaEvents, FaSpaSlots> {
}
export {};
