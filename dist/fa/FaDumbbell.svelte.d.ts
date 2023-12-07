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
export type FaDumbbellProps = typeof __propDef.props;
export type FaDumbbellEvents = typeof __propDef.events;
export type FaDumbbellSlots = typeof __propDef.slots;
export default class FaDumbbell extends SvelteComponentTyped<FaDumbbellProps, FaDumbbellEvents, FaDumbbellSlots> {
}
export {};
