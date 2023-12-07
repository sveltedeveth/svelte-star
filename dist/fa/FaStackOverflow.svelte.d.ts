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
export type FaStackOverflowProps = typeof __propDef.props;
export type FaStackOverflowEvents = typeof __propDef.events;
export type FaStackOverflowSlots = typeof __propDef.slots;
export default class FaStackOverflow extends SvelteComponentTyped<FaStackOverflowProps, FaStackOverflowEvents, FaStackOverflowSlots> {
}
export {};
