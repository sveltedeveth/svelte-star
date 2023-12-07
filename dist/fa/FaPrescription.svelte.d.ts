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
export type FaPrescriptionProps = typeof __propDef.props;
export type FaPrescriptionEvents = typeof __propDef.events;
export type FaPrescriptionSlots = typeof __propDef.slots;
export default class FaPrescription extends SvelteComponentTyped<FaPrescriptionProps, FaPrescriptionEvents, FaPrescriptionSlots> {
}
export {};
