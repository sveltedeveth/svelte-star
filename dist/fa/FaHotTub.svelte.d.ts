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
export type FaHotTubProps = typeof __propDef.props;
export type FaHotTubEvents = typeof __propDef.events;
export type FaHotTubSlots = typeof __propDef.slots;
export default class FaHotTub extends SvelteComponentTyped<FaHotTubProps, FaHotTubEvents, FaHotTubSlots> {
}
export {};
