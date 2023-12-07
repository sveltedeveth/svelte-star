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
export type FaYoastProps = typeof __propDef.props;
export type FaYoastEvents = typeof __propDef.events;
export type FaYoastSlots = typeof __propDef.slots;
export default class FaYoast extends SvelteComponentTyped<FaYoastProps, FaYoastEvents, FaYoastSlots> {
}
export {};
