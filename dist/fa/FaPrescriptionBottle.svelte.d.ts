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
export type FaPrescriptionBottleProps = typeof __propDef.props;
export type FaPrescriptionBottleEvents = typeof __propDef.events;
export type FaPrescriptionBottleSlots = typeof __propDef.slots;
export default class FaPrescriptionBottle extends SvelteComponentTyped<FaPrescriptionBottleProps, FaPrescriptionBottleEvents, FaPrescriptionBottleSlots> {
}
export {};
