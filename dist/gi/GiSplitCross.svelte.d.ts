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
export type GiSplitCrossProps = typeof __propDef.props;
export type GiSplitCrossEvents = typeof __propDef.events;
export type GiSplitCrossSlots = typeof __propDef.slots;
export default class GiSplitCross extends SvelteComponentTyped<GiSplitCrossProps, GiSplitCrossEvents, GiSplitCrossSlots> {
}
export {};
