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
export type GiBackwardTimeProps = typeof __propDef.props;
export type GiBackwardTimeEvents = typeof __propDef.events;
export type GiBackwardTimeSlots = typeof __propDef.slots;
export default class GiBackwardTime extends SvelteComponentTyped<GiBackwardTimeProps, GiBackwardTimeEvents, GiBackwardTimeSlots> {
}
export {};
