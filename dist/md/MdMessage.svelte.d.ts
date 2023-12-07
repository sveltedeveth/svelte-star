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
export type MdMessageProps = typeof __propDef.props;
export type MdMessageEvents = typeof __propDef.events;
export type MdMessageSlots = typeof __propDef.slots;
export default class MdMessage extends SvelteComponentTyped<MdMessageProps, MdMessageEvents, MdMessageSlots> {
}
export {};
