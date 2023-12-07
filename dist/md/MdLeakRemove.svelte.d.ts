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
export type MdLeakRemoveProps = typeof __propDef.props;
export type MdLeakRemoveEvents = typeof __propDef.events;
export type MdLeakRemoveSlots = typeof __propDef.slots;
export default class MdLeakRemove extends SvelteComponentTyped<MdLeakRemoveProps, MdLeakRemoveEvents, MdLeakRemoveSlots> {
}
export {};
