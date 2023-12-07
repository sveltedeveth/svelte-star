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
export type FaFileMedicalProps = typeof __propDef.props;
export type FaFileMedicalEvents = typeof __propDef.events;
export type FaFileMedicalSlots = typeof __propDef.slots;
export default class FaFileMedical extends SvelteComponentTyped<FaFileMedicalProps, FaFileMedicalEvents, FaFileMedicalSlots> {
}
export {};
