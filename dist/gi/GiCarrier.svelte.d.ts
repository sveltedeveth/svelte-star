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
export type GiCarrierProps = typeof __propDef.props;
export type GiCarrierEvents = typeof __propDef.events;
export type GiCarrierSlots = typeof __propDef.slots;
export default class GiCarrier extends SvelteComponentTyped<GiCarrierProps, GiCarrierEvents, GiCarrierSlots> {
}
export {};
