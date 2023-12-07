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
export type GiClockworkProps = typeof __propDef.props;
export type GiClockworkEvents = typeof __propDef.events;
export type GiClockworkSlots = typeof __propDef.slots;
export default class GiClockwork extends SvelteComponentTyped<GiClockworkProps, GiClockworkEvents, GiClockworkSlots> {
}
export {};
