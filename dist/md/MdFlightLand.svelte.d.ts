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
export type MdFlightLandProps = typeof __propDef.props;
export type MdFlightLandEvents = typeof __propDef.events;
export type MdFlightLandSlots = typeof __propDef.slots;
export default class MdFlightLand extends SvelteComponentTyped<MdFlightLandProps, MdFlightLandEvents, MdFlightLandSlots> {
}
export {};
