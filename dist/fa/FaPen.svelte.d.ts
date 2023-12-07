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
export type FaPenProps = typeof __propDef.props;
export type FaPenEvents = typeof __propDef.events;
export type FaPenSlots = typeof __propDef.slots;
export default class FaPen extends SvelteComponentTyped<FaPenProps, FaPenEvents, FaPenSlots> {
}
export {};
