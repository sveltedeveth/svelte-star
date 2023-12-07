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
export type MdHotelProps = typeof __propDef.props;
export type MdHotelEvents = typeof __propDef.events;
export type MdHotelSlots = typeof __propDef.slots;
export default class MdHotel extends SvelteComponentTyped<MdHotelProps, MdHotelEvents, MdHotelSlots> {
}
export {};
