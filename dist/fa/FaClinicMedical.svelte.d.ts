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
export type FaClinicMedicalProps = typeof __propDef.props;
export type FaClinicMedicalEvents = typeof __propDef.events;
export type FaClinicMedicalSlots = typeof __propDef.slots;
export default class FaClinicMedical extends SvelteComponentTyped<FaClinicMedicalProps, FaClinicMedicalEvents, FaClinicMedicalSlots> {
}
export {};
