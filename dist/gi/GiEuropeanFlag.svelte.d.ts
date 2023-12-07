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
export type GiEuropeanFlagProps = typeof __propDef.props;
export type GiEuropeanFlagEvents = typeof __propDef.events;
export type GiEuropeanFlagSlots = typeof __propDef.slots;
export default class GiEuropeanFlag extends SvelteComponentTyped<GiEuropeanFlagProps, GiEuropeanFlagEvents, GiEuropeanFlagSlots> {
}
export {};
