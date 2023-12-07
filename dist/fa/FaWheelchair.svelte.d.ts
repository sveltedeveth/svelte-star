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
export type FaWheelchairProps = typeof __propDef.props;
export type FaWheelchairEvents = typeof __propDef.events;
export type FaWheelchairSlots = typeof __propDef.slots;
export default class FaWheelchair extends SvelteComponentTyped<FaWheelchairProps, FaWheelchairEvents, FaWheelchairSlots> {
}
export {};
