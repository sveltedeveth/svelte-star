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
export type MdMoodBadProps = typeof __propDef.props;
export type MdMoodBadEvents = typeof __propDef.events;
export type MdMoodBadSlots = typeof __propDef.slots;
export default class MdMoodBad extends SvelteComponentTyped<MdMoodBadProps, MdMoodBadEvents, MdMoodBadSlots> {
}
export {};
