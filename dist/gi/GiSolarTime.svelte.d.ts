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
export type GiSolarTimeProps = typeof __propDef.props;
export type GiSolarTimeEvents = typeof __propDef.events;
export type GiSolarTimeSlots = typeof __propDef.slots;
export default class GiSolarTime extends SvelteComponentTyped<GiSolarTimeProps, GiSolarTimeEvents, GiSolarTimeSlots> {
}
export {};
