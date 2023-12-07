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
export type FaThermometerHalfProps = typeof __propDef.props;
export type FaThermometerHalfEvents = typeof __propDef.events;
export type FaThermometerHalfSlots = typeof __propDef.slots;
export default class FaThermometerHalf extends SvelteComponentTyped<FaThermometerHalfProps, FaThermometerHalfEvents, FaThermometerHalfSlots> {
}
export {};
