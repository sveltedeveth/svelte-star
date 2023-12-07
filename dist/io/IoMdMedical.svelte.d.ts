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
export type IoMdMedicalProps = typeof __propDef.props;
export type IoMdMedicalEvents = typeof __propDef.events;
export type IoMdMedicalSlots = typeof __propDef.slots;
export default class IoMdMedical extends SvelteComponentTyped<IoMdMedicalProps, IoMdMedicalEvents, IoMdMedicalSlots> {
}
export {};
