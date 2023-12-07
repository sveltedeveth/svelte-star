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
export type GiSandsOfTimeProps = typeof __propDef.props;
export type GiSandsOfTimeEvents = typeof __propDef.events;
export type GiSandsOfTimeSlots = typeof __propDef.slots;
export default class GiSandsOfTime extends SvelteComponentTyped<GiSandsOfTimeProps, GiSandsOfTimeEvents, GiSandsOfTimeSlots> {
}
export {};
