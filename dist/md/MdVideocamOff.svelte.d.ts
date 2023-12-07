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
export type MdVideocamOffProps = typeof __propDef.props;
export type MdVideocamOffEvents = typeof __propDef.events;
export type MdVideocamOffSlots = typeof __propDef.slots;
export default class MdVideocamOff extends SvelteComponentTyped<MdVideocamOffProps, MdVideocamOffEvents, MdVideocamOffSlots> {
}
export {};
