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
export type FaAirFreshenerProps = typeof __propDef.props;
export type FaAirFreshenerEvents = typeof __propDef.events;
export type FaAirFreshenerSlots = typeof __propDef.slots;
export default class FaAirFreshener extends SvelteComponentTyped<FaAirFreshenerProps, FaAirFreshenerEvents, FaAirFreshenerSlots> {
}
export {};
