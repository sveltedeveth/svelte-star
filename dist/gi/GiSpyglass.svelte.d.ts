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
export type GiSpyglassProps = typeof __propDef.props;
export type GiSpyglassEvents = typeof __propDef.events;
export type GiSpyglassSlots = typeof __propDef.slots;
export default class GiSpyglass extends SvelteComponentTyped<GiSpyglassProps, GiSpyglassEvents, GiSpyglassSlots> {
}
export {};
