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
export type MdFlightTakeoffProps = typeof __propDef.props;
export type MdFlightTakeoffEvents = typeof __propDef.events;
export type MdFlightTakeoffSlots = typeof __propDef.slots;
export default class MdFlightTakeoff extends SvelteComponentTyped<MdFlightTakeoffProps, MdFlightTakeoffEvents, MdFlightTakeoffSlots> {
}
export {};
