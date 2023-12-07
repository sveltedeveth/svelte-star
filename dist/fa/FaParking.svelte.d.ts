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
export type FaParkingProps = typeof __propDef.props;
export type FaParkingEvents = typeof __propDef.events;
export type FaParkingSlots = typeof __propDef.slots;
export default class FaParking extends SvelteComponentTyped<FaParkingProps, FaParkingEvents, FaParkingSlots> {
}
export {};
