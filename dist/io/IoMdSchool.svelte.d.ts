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
export type IoMdSchoolProps = typeof __propDef.props;
export type IoMdSchoolEvents = typeof __propDef.events;
export type IoMdSchoolSlots = typeof __propDef.slots;
export default class IoMdSchool extends SvelteComponentTyped<IoMdSchoolProps, IoMdSchoolEvents, IoMdSchoolSlots> {
}
export {};
