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
export type MdLeakAddProps = typeof __propDef.props;
export type MdLeakAddEvents = typeof __propDef.events;
export type MdLeakAddSlots = typeof __propDef.slots;
export default class MdLeakAdd extends SvelteComponentTyped<MdLeakAddProps, MdLeakAddEvents, MdLeakAddSlots> {
}
export {};
