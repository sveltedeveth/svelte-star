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
export type FaBicycleProps = typeof __propDef.props;
export type FaBicycleEvents = typeof __propDef.events;
export type FaBicycleSlots = typeof __propDef.slots;
export default class FaBicycle extends SvelteComponentTyped<FaBicycleProps, FaBicycleEvents, FaBicycleSlots> {
}
export {};
