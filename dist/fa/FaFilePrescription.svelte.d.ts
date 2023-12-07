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
export type FaFilePrescriptionProps = typeof __propDef.props;
export type FaFilePrescriptionEvents = typeof __propDef.events;
export type FaFilePrescriptionSlots = typeof __propDef.slots;
export default class FaFilePrescription extends SvelteComponentTyped<FaFilePrescriptionProps, FaFilePrescriptionEvents, FaFilePrescriptionSlots> {
}
export {};
