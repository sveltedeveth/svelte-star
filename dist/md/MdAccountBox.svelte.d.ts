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
export type MdAccountBoxProps = typeof __propDef.props;
export type MdAccountBoxEvents = typeof __propDef.events;
export type MdAccountBoxSlots = typeof __propDef.slots;
export default class MdAccountBox extends SvelteComponentTyped<MdAccountBoxProps, MdAccountBoxEvents, MdAccountBoxSlots> {
}
export {};
