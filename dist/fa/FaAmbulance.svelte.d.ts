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
export type FaAmbulanceProps = typeof __propDef.props;
export type FaAmbulanceEvents = typeof __propDef.events;
export type FaAmbulanceSlots = typeof __propDef.slots;
export default class FaAmbulance extends SvelteComponentTyped<FaAmbulanceProps, FaAmbulanceEvents, FaAmbulanceSlots> {
}
export {};
