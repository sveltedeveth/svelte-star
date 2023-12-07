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
export type FaSmsProps = typeof __propDef.props;
export type FaSmsEvents = typeof __propDef.events;
export type FaSmsSlots = typeof __propDef.slots;
export default class FaSms extends SvelteComponentTyped<FaSmsProps, FaSmsEvents, FaSmsSlots> {
}
export {};
