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
export type MdRemoveProps = typeof __propDef.props;
export type MdRemoveEvents = typeof __propDef.events;
export type MdRemoveSlots = typeof __propDef.slots;
export default class MdRemove extends SvelteComponentTyped<MdRemoveProps, MdRemoveEvents, MdRemoveSlots> {
}
export {};
