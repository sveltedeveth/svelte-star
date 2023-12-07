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
export type MdSchoolProps = typeof __propDef.props;
export type MdSchoolEvents = typeof __propDef.events;
export type MdSchoolSlots = typeof __propDef.slots;
export default class MdSchool extends SvelteComponentTyped<MdSchoolProps, MdSchoolEvents, MdSchoolSlots> {
}
export {};
