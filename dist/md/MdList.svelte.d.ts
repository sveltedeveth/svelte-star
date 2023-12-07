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
export type MdListProps = typeof __propDef.props;
export type MdListEvents = typeof __propDef.events;
export type MdListSlots = typeof __propDef.slots;
export default class MdList extends SvelteComponentTyped<MdListProps, MdListEvents, MdListSlots> {
}
export {};
