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
export type FaSprayCanProps = typeof __propDef.props;
export type FaSprayCanEvents = typeof __propDef.events;
export type FaSprayCanSlots = typeof __propDef.slots;
export default class FaSprayCan extends SvelteComponentTyped<FaSprayCanProps, FaSprayCanEvents, FaSprayCanSlots> {
}
export {};
