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
export type GiHourglassProps = typeof __propDef.props;
export type GiHourglassEvents = typeof __propDef.events;
export type GiHourglassSlots = typeof __propDef.slots;
export default class GiHourglass extends SvelteComponentTyped<GiHourglassProps, GiHourglassEvents, GiHourglassSlots> {
}
export {};
