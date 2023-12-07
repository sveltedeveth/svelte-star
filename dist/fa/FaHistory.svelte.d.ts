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
export type FaHistoryProps = typeof __propDef.props;
export type FaHistoryEvents = typeof __propDef.events;
export type FaHistorySlots = typeof __propDef.slots;
export default class FaHistory extends SvelteComponentTyped<FaHistoryProps, FaHistoryEvents, FaHistorySlots> {
}
export {};
