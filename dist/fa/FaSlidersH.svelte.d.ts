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
export type FaSlidersHProps = typeof __propDef.props;
export type FaSlidersHEvents = typeof __propDef.events;
export type FaSlidersHSlots = typeof __propDef.slots;
export default class FaSlidersH extends SvelteComponentTyped<FaSlidersHProps, FaSlidersHEvents, FaSlidersHSlots> {
}
export {};
