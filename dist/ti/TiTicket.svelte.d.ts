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
export type TiTicketProps = typeof __propDef.props;
export type TiTicketEvents = typeof __propDef.events;
export type TiTicketSlots = typeof __propDef.slots;
export default class TiTicket extends SvelteComponentTyped<TiTicketProps, TiTicketEvents, TiTicketSlots> {
}
export {};
