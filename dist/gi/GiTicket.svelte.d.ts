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
export type GiTicketProps = typeof __propDef.props;
export type GiTicketEvents = typeof __propDef.events;
export type GiTicketSlots = typeof __propDef.slots;
export default class GiTicket extends SvelteComponentTyped<GiTicketProps, GiTicketEvents, GiTicketSlots> {
}
export {};
