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
export type FaGraduationCapProps = typeof __propDef.props;
export type FaGraduationCapEvents = typeof __propDef.events;
export type FaGraduationCapSlots = typeof __propDef.slots;
export default class FaGraduationCap extends SvelteComponentTyped<FaGraduationCapProps, FaGraduationCapEvents, FaGraduationCapSlots> {
}
export {};
