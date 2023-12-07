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
export type IoMdRemoveProps = typeof __propDef.props;
export type IoMdRemoveEvents = typeof __propDef.events;
export type IoMdRemoveSlots = typeof __propDef.slots;
export default class IoMdRemove extends SvelteComponentTyped<IoMdRemoveProps, IoMdRemoveEvents, IoMdRemoveSlots> {
}
export {};
