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
export type FaToriiGateProps = typeof __propDef.props;
export type FaToriiGateEvents = typeof __propDef.events;
export type FaToriiGateSlots = typeof __propDef.slots;
export default class FaToriiGate extends SvelteComponentTyped<FaToriiGateProps, FaToriiGateEvents, FaToriiGateSlots> {
}
export {};
