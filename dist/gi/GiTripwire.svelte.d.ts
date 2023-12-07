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
export type GiTripwireProps = typeof __propDef.props;
export type GiTripwireEvents = typeof __propDef.events;
export type GiTripwireSlots = typeof __propDef.slots;
export default class GiTripwire extends SvelteComponentTyped<GiTripwireProps, GiTripwireEvents, GiTripwireSlots> {
}
export {};
