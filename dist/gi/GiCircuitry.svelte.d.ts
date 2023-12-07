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
export type GiCircuitryProps = typeof __propDef.props;
export type GiCircuitryEvents = typeof __propDef.events;
export type GiCircuitrySlots = typeof __propDef.slots;
export default class GiCircuitry extends SvelteComponentTyped<GiCircuitryProps, GiCircuitryEvents, GiCircuitrySlots> {
}
export {};
