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
export type MdMicNoneProps = typeof __propDef.props;
export type MdMicNoneEvents = typeof __propDef.events;
export type MdMicNoneSlots = typeof __propDef.slots;
export default class MdMicNone extends SvelteComponentTyped<MdMicNoneProps, MdMicNoneEvents, MdMicNoneSlots> {
}
export {};
