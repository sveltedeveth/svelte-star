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
export type GiComputingProps = typeof __propDef.props;
export type GiComputingEvents = typeof __propDef.events;
export type GiComputingSlots = typeof __propDef.slots;
export default class GiComputing extends SvelteComponentTyped<GiComputingProps, GiComputingEvents, GiComputingSlots> {
}
export {};
