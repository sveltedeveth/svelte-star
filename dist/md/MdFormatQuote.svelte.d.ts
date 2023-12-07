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
export type MdFormatQuoteProps = typeof __propDef.props;
export type MdFormatQuoteEvents = typeof __propDef.events;
export type MdFormatQuoteSlots = typeof __propDef.slots;
export default class MdFormatQuote extends SvelteComponentTyped<MdFormatQuoteProps, MdFormatQuoteEvents, MdFormatQuoteSlots> {
}
export {};
