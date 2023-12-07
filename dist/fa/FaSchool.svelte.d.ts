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
export type FaSchoolProps = typeof __propDef.props;
export type FaSchoolEvents = typeof __propDef.events;
export type FaSchoolSlots = typeof __propDef.slots;
export default class FaSchool extends SvelteComponentTyped<FaSchoolProps, FaSchoolEvents, FaSchoolSlots> {
}
export {};
