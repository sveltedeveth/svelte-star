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
export type MdStopProps = typeof __propDef.props;
export type MdStopEvents = typeof __propDef.events;
export type MdStopSlots = typeof __propDef.slots;
export default class MdStop extends SvelteComponentTyped<MdStopProps, MdStopEvents, MdStopSlots> {
}
export {};
