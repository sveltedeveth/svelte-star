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
export type MdSubjectProps = typeof __propDef.props;
export type MdSubjectEvents = typeof __propDef.events;
export type MdSubjectSlots = typeof __propDef.slots;
export default class MdSubject extends SvelteComponentTyped<MdSubjectProps, MdSubjectEvents, MdSubjectSlots> {
}
export {};
