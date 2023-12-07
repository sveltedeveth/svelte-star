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
export type IoIosQuoteProps = typeof __propDef.props;
export type IoIosQuoteEvents = typeof __propDef.events;
export type IoIosQuoteSlots = typeof __propDef.slots;
export default class IoIosQuote extends SvelteComponentTyped<IoIosQuoteProps, IoIosQuoteEvents, IoIosQuoteSlots> {
}
export {};
