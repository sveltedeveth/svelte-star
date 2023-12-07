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
export type GiSleepyProps = typeof __propDef.props;
export type GiSleepyEvents = typeof __propDef.events;
export type GiSleepySlots = typeof __propDef.slots;
export default class GiSleepy extends SvelteComponentTyped<GiSleepyProps, GiSleepyEvents, GiSleepySlots> {
}
export {};
