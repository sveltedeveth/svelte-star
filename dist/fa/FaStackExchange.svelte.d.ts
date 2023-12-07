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
export type FaStackExchangeProps = typeof __propDef.props;
export type FaStackExchangeEvents = typeof __propDef.events;
export type FaStackExchangeSlots = typeof __propDef.slots;
export default class FaStackExchange extends SvelteComponentTyped<FaStackExchangeProps, FaStackExchangeEvents, FaStackExchangeSlots> {
}
export {};
