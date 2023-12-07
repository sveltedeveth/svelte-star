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
export type MdEditProps = typeof __propDef.props;
export type MdEditEvents = typeof __propDef.events;
export type MdEditSlots = typeof __propDef.slots;
export default class MdEdit extends SvelteComponentTyped<MdEditProps, MdEditEvents, MdEditSlots> {
}
export {};
