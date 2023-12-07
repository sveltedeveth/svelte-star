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
export type FaMapMarkedProps = typeof __propDef.props;
export type FaMapMarkedEvents = typeof __propDef.events;
export type FaMapMarkedSlots = typeof __propDef.slots;
export default class FaMapMarked extends SvelteComponentTyped<FaMapMarkedProps, FaMapMarkedEvents, FaMapMarkedSlots> {
}
export {};
