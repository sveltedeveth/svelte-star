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
export type GiTeacherProps = typeof __propDef.props;
export type GiTeacherEvents = typeof __propDef.events;
export type GiTeacherSlots = typeof __propDef.slots;
export default class GiTeacher extends SvelteComponentTyped<GiTeacherProps, GiTeacherEvents, GiTeacherSlots> {
}
export {};
