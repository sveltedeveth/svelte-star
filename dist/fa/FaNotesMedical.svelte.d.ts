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
export type FaNotesMedicalProps = typeof __propDef.props;
export type FaNotesMedicalEvents = typeof __propDef.events;
export type FaNotesMedicalSlots = typeof __propDef.slots;
export default class FaNotesMedical extends SvelteComponentTyped<FaNotesMedicalProps, FaNotesMedicalEvents, FaNotesMedicalSlots> {
}
export {};
