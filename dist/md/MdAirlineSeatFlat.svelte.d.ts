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
export type MdAirlineSeatFlatProps = typeof __propDef.props;
export type MdAirlineSeatFlatEvents = typeof __propDef.events;
export type MdAirlineSeatFlatSlots = typeof __propDef.slots;
export default class MdAirlineSeatFlat extends SvelteComponentTyped<MdAirlineSeatFlatProps, MdAirlineSeatFlatEvents, MdAirlineSeatFlatSlots> {
}
export {};
