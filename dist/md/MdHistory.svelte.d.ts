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
export type MdHistoryProps = typeof __propDef.props;
export type MdHistoryEvents = typeof __propDef.events;
export type MdHistorySlots = typeof __propDef.slots;
export default class MdHistory extends SvelteComponentTyped<MdHistoryProps, MdHistoryEvents, MdHistorySlots> {
}
export {};
