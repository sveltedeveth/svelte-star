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
export type FaDiceSixProps = typeof __propDef.props;
export type FaDiceSixEvents = typeof __propDef.events;
export type FaDiceSixSlots = typeof __propDef.slots;
export default class FaDiceSix extends SvelteComponentTyped<FaDiceSixProps, FaDiceSixEvents, FaDiceSixSlots> {
}
export {};
