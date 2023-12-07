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
export type FaOpencartProps = typeof __propDef.props;
export type FaOpencartEvents = typeof __propDef.events;
export type FaOpencartSlots = typeof __propDef.slots;
export default class FaOpencart extends SvelteComponentTyped<FaOpencartProps, FaOpencartEvents, FaOpencartSlots> {
}
export {};
