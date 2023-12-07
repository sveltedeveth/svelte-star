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
export type FaAirbnbProps = typeof __propDef.props;
export type FaAirbnbEvents = typeof __propDef.events;
export type FaAirbnbSlots = typeof __propDef.slots;
export default class FaAirbnb extends SvelteComponentTyped<FaAirbnbProps, FaAirbnbEvents, FaAirbnbSlots> {
}
export {};
