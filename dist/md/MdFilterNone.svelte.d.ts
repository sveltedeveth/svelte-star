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
export type MdFilterNoneProps = typeof __propDef.props;
export type MdFilterNoneEvents = typeof __propDef.events;
export type MdFilterNoneSlots = typeof __propDef.slots;
export default class MdFilterNone extends SvelteComponentTyped<MdFilterNoneProps, MdFilterNoneEvents, MdFilterNoneSlots> {
}
export {};
