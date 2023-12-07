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
export type FaHollyBerryProps = typeof __propDef.props;
export type FaHollyBerryEvents = typeof __propDef.events;
export type FaHollyBerrySlots = typeof __propDef.slots;
export default class FaHollyBerry extends SvelteComponentTyped<FaHollyBerryProps, FaHollyBerryEvents, FaHollyBerrySlots> {
}
export {};
