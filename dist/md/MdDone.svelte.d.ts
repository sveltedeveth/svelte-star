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
export type MdDoneProps = typeof __propDef.props;
export type MdDoneEvents = typeof __propDef.events;
export type MdDoneSlots = typeof __propDef.slots;
export default class MdDone extends SvelteComponentTyped<MdDoneProps, MdDoneEvents, MdDoneSlots> {
}
export {};
