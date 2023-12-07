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
export type GiWaterfallProps = typeof __propDef.props;
export type GiWaterfallEvents = typeof __propDef.events;
export type GiWaterfallSlots = typeof __propDef.slots;
export default class GiWaterfall extends SvelteComponentTyped<GiWaterfallProps, GiWaterfallEvents, GiWaterfallSlots> {
}
export {};
