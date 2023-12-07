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
export type MdDoneAllProps = typeof __propDef.props;
export type MdDoneAllEvents = typeof __propDef.events;
export type MdDoneAllSlots = typeof __propDef.slots;
export default class MdDoneAll extends SvelteComponentTyped<MdDoneAllProps, MdDoneAllEvents, MdDoneAllSlots> {
}
export {};
