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
export type GoQuoteProps = typeof __propDef.props;
export type GoQuoteEvents = typeof __propDef.events;
export type GoQuoteSlots = typeof __propDef.slots;
export default class GoQuote extends SvelteComponentTyped<GoQuoteProps, GoQuoteEvents, GoQuoteSlots> {
}
export {};
