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
export type MdTimelineProps = typeof __propDef.props;
export type MdTimelineEvents = typeof __propDef.events;
export type MdTimelineSlots = typeof __propDef.slots;
export default class MdTimeline extends SvelteComponentTyped<MdTimelineProps, MdTimelineEvents, MdTimelineSlots> {
}
export {};
