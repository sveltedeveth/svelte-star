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
export type FaYahooProps = typeof __propDef.props;
export type FaYahooEvents = typeof __propDef.events;
export type FaYahooSlots = typeof __propDef.slots;
export default class FaYahoo extends SvelteComponentTyped<FaYahooProps, FaYahooEvents, FaYahooSlots> {
}
export {};
