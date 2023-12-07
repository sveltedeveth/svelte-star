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
export type GiChargingBullProps = typeof __propDef.props;
export type GiChargingBullEvents = typeof __propDef.events;
export type GiChargingBullSlots = typeof __propDef.slots;
export default class GiChargingBull extends SvelteComponentTyped<GiChargingBullProps, GiChargingBullEvents, GiChargingBullSlots> {
}
export {};
