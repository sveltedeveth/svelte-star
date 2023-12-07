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
export type FaCrossProps = typeof __propDef.props;
export type FaCrossEvents = typeof __propDef.events;
export type FaCrossSlots = typeof __propDef.slots;
export default class FaCross extends SvelteComponentTyped<FaCrossProps, FaCrossEvents, FaCrossSlots> {
}
export {};
