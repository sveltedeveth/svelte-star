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
export type MdGroupAddProps = typeof __propDef.props;
export type MdGroupAddEvents = typeof __propDef.events;
export type MdGroupAddSlots = typeof __propDef.slots;
export default class MdGroupAdd extends SvelteComponentTyped<MdGroupAddProps, MdGroupAddEvents, MdGroupAddSlots> {
}
export {};
