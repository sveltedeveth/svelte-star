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
export type FaRecycleProps = typeof __propDef.props;
export type FaRecycleEvents = typeof __propDef.events;
export type FaRecycleSlots = typeof __propDef.slots;
export default class FaRecycle extends SvelteComponentTyped<FaRecycleProps, FaRecycleEvents, FaRecycleSlots> {
}
export {};
