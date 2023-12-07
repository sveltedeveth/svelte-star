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
export type GiAmbulanceProps = typeof __propDef.props;
export type GiAmbulanceEvents = typeof __propDef.events;
export type GiAmbulanceSlots = typeof __propDef.slots;
export default class GiAmbulance extends SvelteComponentTyped<GiAmbulanceProps, GiAmbulanceEvents, GiAmbulanceSlots> {
}
export {};
