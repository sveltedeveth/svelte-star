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
export type MdLoopProps = typeof __propDef.props;
export type MdLoopEvents = typeof __propDef.events;
export type MdLoopSlots = typeof __propDef.slots;
export default class MdLoop extends SvelteComponentTyped<MdLoopProps, MdLoopEvents, MdLoopSlots> {
}
export {};
