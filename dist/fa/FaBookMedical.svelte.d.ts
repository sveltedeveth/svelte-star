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
export type FaBookMedicalProps = typeof __propDef.props;
export type FaBookMedicalEvents = typeof __propDef.events;
export type FaBookMedicalSlots = typeof __propDef.slots;
export default class FaBookMedical extends SvelteComponentTyped<FaBookMedicalProps, FaBookMedicalEvents, FaBookMedicalSlots> {
}
export {};
