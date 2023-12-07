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
export type FaYammerProps = typeof __propDef.props;
export type FaYammerEvents = typeof __propDef.events;
export type FaYammerSlots = typeof __propDef.slots;
export default class FaYammer extends SvelteComponentTyped<FaYammerProps, FaYammerEvents, FaYammerSlots> {
}
export {};
