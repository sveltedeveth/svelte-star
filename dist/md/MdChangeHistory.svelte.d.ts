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
export type MdChangeHistoryProps = typeof __propDef.props;
export type MdChangeHistoryEvents = typeof __propDef.events;
export type MdChangeHistorySlots = typeof __propDef.slots;
export default class MdChangeHistory extends SvelteComponentTyped<MdChangeHistoryProps, MdChangeHistoryEvents, MdChangeHistorySlots> {
}
export {};
