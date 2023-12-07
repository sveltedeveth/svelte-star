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
export type IoMdHourglassProps = typeof __propDef.props;
export type IoMdHourglassEvents = typeof __propDef.events;
export type IoMdHourglassSlots = typeof __propDef.slots;
export default class IoMdHourglass extends SvelteComponentTyped<IoMdHourglassProps, IoMdHourglassEvents, IoMdHourglassSlots> {
}
export {};
