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
export type FaQuoteRightProps = typeof __propDef.props;
export type FaQuoteRightEvents = typeof __propDef.events;
export type FaQuoteRightSlots = typeof __propDef.slots;
export default class FaQuoteRight extends SvelteComponentTyped<FaQuoteRightProps, FaQuoteRightEvents, FaQuoteRightSlots> {
}
export {};
