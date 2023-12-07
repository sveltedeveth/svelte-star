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
export type IoMdListProps = typeof __propDef.props;
export type IoMdListEvents = typeof __propDef.events;
export type IoMdListSlots = typeof __propDef.slots;
export default class IoMdList extends SvelteComponentTyped<IoMdListProps, IoMdListEvents, IoMdListSlots> {
}
export {};
