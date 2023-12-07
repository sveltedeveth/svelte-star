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
export type GiPeaksProps = typeof __propDef.props;
export type GiPeaksEvents = typeof __propDef.events;
export type GiPeaksSlots = typeof __propDef.slots;
export default class GiPeaks extends SvelteComponentTyped<GiPeaksProps, GiPeaksEvents, GiPeaksSlots> {
}
export {};
