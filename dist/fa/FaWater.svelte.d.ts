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
export type FaWaterProps = typeof __propDef.props;
export type FaWaterEvents = typeof __propDef.events;
export type FaWaterSlots = typeof __propDef.slots;
export default class FaWater extends SvelteComponentTyped<FaWaterProps, FaWaterEvents, FaWaterSlots> {
}
export {};
