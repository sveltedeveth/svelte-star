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
export type FaTrademarkProps = typeof __propDef.props;
export type FaTrademarkEvents = typeof __propDef.events;
export type FaTrademarkSlots = typeof __propDef.slots;
export default class FaTrademark extends SvelteComponentTyped<FaTrademarkProps, FaTrademarkEvents, FaTrademarkSlots> {
}
export {};
