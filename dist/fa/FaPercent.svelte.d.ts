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
export type FaPercentProps = typeof __propDef.props;
export type FaPercentEvents = typeof __propDef.events;
export type FaPercentSlots = typeof __propDef.slots;
export default class FaPercent extends SvelteComponentTyped<FaPercentProps, FaPercentEvents, FaPercentSlots> {
}
export {};
