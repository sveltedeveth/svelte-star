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
export type FaPlaneDepartureProps = typeof __propDef.props;
export type FaPlaneDepartureEvents = typeof __propDef.events;
export type FaPlaneDepartureSlots = typeof __propDef.slots;
export default class FaPlaneDeparture extends SvelteComponentTyped<FaPlaneDepartureProps, FaPlaneDepartureEvents, FaPlaneDepartureSlots> {
}
export {};
