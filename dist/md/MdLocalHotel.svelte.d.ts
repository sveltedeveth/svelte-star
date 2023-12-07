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
export type MdLocalHotelProps = typeof __propDef.props;
export type MdLocalHotelEvents = typeof __propDef.events;
export type MdLocalHotelSlots = typeof __propDef.slots;
export default class MdLocalHotel extends SvelteComponentTyped<MdLocalHotelProps, MdLocalHotelEvents, MdLocalHotelSlots> {
}
export {};
