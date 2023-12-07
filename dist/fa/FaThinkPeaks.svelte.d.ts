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
export type FaThinkPeaksProps = typeof __propDef.props;
export type FaThinkPeaksEvents = typeof __propDef.events;
export type FaThinkPeaksSlots = typeof __propDef.slots;
export default class FaThinkPeaks extends SvelteComponentTyped<FaThinkPeaksProps, FaThinkPeaksEvents, FaThinkPeaksSlots> {
}
export {};
