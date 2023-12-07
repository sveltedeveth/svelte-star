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
export type GiBeachBucketProps = typeof __propDef.props;
export type GiBeachBucketEvents = typeof __propDef.events;
export type GiBeachBucketSlots = typeof __propDef.slots;
export default class GiBeachBucket extends SvelteComponentTyped<GiBeachBucketProps, GiBeachBucketEvents, GiBeachBucketSlots> {
}
export {};
