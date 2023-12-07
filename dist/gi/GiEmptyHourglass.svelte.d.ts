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
export type GiEmptyHourglassProps = typeof __propDef.props;
export type GiEmptyHourglassEvents = typeof __propDef.events;
export type GiEmptyHourglassSlots = typeof __propDef.slots;
export default class GiEmptyHourglass extends SvelteComponentTyped<GiEmptyHourglassProps, GiEmptyHourglassEvents, GiEmptyHourglassSlots> {
}
export {};
