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
export type GoHistoryProps = typeof __propDef.props;
export type GoHistoryEvents = typeof __propDef.events;
export type GoHistorySlots = typeof __propDef.slots;
export default class GoHistory extends SvelteComponentTyped<GoHistoryProps, GoHistoryEvents, GoHistorySlots> {
}
export {};
