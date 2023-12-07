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
export type FaMapPinProps = typeof __propDef.props;
export type FaMapPinEvents = typeof __propDef.events;
export type FaMapPinSlots = typeof __propDef.slots;
export default class FaMapPin extends SvelteComponentTyped<FaMapPinProps, FaMapPinEvents, FaMapPinSlots> {
}
export {};
