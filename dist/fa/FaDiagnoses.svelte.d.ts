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
export type FaDiagnosesProps = typeof __propDef.props;
export type FaDiagnosesEvents = typeof __propDef.events;
export type FaDiagnosesSlots = typeof __propDef.slots;
export default class FaDiagnoses extends SvelteComponentTyped<FaDiagnosesProps, FaDiagnosesEvents, FaDiagnosesSlots> {
}
export {};
