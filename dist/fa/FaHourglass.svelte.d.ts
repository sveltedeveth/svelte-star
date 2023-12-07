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
export type FaHourglassProps = typeof __propDef.props;
export type FaHourglassEvents = typeof __propDef.events;
export type FaHourglassSlots = typeof __propDef.slots;
export default class FaHourglass extends SvelteComponentTyped<FaHourglassProps, FaHourglassEvents, FaHourglassSlots> {
}
export {};
