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
export type MdGradeProps = typeof __propDef.props;
export type MdGradeEvents = typeof __propDef.events;
export type MdGradeSlots = typeof __propDef.slots;
export default class MdGrade extends SvelteComponentTyped<MdGradeProps, MdGradeEvents, MdGradeSlots> {
}
export {};
