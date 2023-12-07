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
export type GiCardExchangeProps = typeof __propDef.props;
export type GiCardExchangeEvents = typeof __propDef.events;
export type GiCardExchangeSlots = typeof __propDef.slots;
export default class GiCardExchange extends SvelteComponentTyped<GiCardExchangeProps, GiCardExchangeEvents, GiCardExchangeSlots> {
}
export {};
