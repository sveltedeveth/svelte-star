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
export type FaRegHourglassProps = typeof __propDef.props;
export type FaRegHourglassEvents = typeof __propDef.events;
export type FaRegHourglassSlots = typeof __propDef.slots;
export default class FaRegHourglass extends SvelteComponentTyped<FaRegHourglassProps, FaRegHourglassEvents, FaRegHourglassSlots> {
}
export {};
