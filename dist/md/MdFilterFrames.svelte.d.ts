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
export type MdFilterFramesProps = typeof __propDef.props;
export type MdFilterFramesEvents = typeof __propDef.events;
export type MdFilterFramesSlots = typeof __propDef.slots;
export default class MdFilterFrames extends SvelteComponentTyped<MdFilterFramesProps, MdFilterFramesEvents, MdFilterFramesSlots> {
}
export {};
