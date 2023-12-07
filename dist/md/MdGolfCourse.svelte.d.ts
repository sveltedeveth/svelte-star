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
export type MdGolfCourseProps = typeof __propDef.props;
export type MdGolfCourseEvents = typeof __propDef.events;
export type MdGolfCourseSlots = typeof __propDef.slots;
export default class MdGolfCourse extends SvelteComponentTyped<MdGolfCourseProps, MdGolfCourseEvents, MdGolfCourseSlots> {
}
export {};
