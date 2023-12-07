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
export type MdDeleteForeverProps = typeof __propDef.props;
export type MdDeleteForeverEvents = typeof __propDef.events;
export type MdDeleteForeverSlots = typeof __propDef.slots;
export default class MdDeleteForever extends SvelteComponentTyped<MdDeleteForeverProps, MdDeleteForeverEvents, MdDeleteForeverSlots> {
}
export {};
