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
export type GiSolarPowerProps = typeof __propDef.props;
export type GiSolarPowerEvents = typeof __propDef.events;
export type GiSolarPowerSlots = typeof __propDef.slots;
export default class GiSolarPower extends SvelteComponentTyped<GiSolarPowerProps, GiSolarPowerEvents, GiSolarPowerSlots> {
}
export {};
