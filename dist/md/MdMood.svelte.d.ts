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
export type MdMoodProps = typeof __propDef.props;
export type MdMoodEvents = typeof __propDef.events;
export type MdMoodSlots = typeof __propDef.slots;
export default class MdMood extends SvelteComponentTyped<MdMoodProps, MdMoodEvents, MdMoodSlots> {
}
export {};
