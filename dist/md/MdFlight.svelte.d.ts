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
export type MdFlightProps = typeof __propDef.props;
export type MdFlightEvents = typeof __propDef.events;
export type MdFlightSlots = typeof __propDef.slots;
export default class MdFlight extends SvelteComponentTyped<MdFlightProps, MdFlightEvents, MdFlightSlots> {
}
export {};
