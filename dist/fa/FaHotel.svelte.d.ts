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
export type FaHotelProps = typeof __propDef.props;
export type FaHotelEvents = typeof __propDef.events;
export type FaHotelSlots = typeof __propDef.slots;
export default class FaHotel extends SvelteComponentTyped<FaHotelProps, FaHotelEvents, FaHotelSlots> {
}
export {};
