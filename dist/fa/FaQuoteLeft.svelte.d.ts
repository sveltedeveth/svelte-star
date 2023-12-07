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
export type FaQuoteLeftProps = typeof __propDef.props;
export type FaQuoteLeftEvents = typeof __propDef.events;
export type FaQuoteLeftSlots = typeof __propDef.slots;
export default class FaQuoteLeft extends SvelteComponentTyped<FaQuoteLeftProps, FaQuoteLeftEvents, FaQuoteLeftSlots> {
}
export {};
