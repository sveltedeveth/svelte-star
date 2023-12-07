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
export type MdLocalParkingProps = typeof __propDef.props;
export type MdLocalParkingEvents = typeof __propDef.events;
export type MdLocalParkingSlots = typeof __propDef.slots;
export default class MdLocalParking extends SvelteComponentTyped<MdLocalParkingProps, MdLocalParkingEvents, MdLocalParkingSlots> {
}
export {};
