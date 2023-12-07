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
export type GiPaintBucketProps = typeof __propDef.props;
export type GiPaintBucketEvents = typeof __propDef.events;
export type GiPaintBucketSlots = typeof __propDef.slots;
export default class GiPaintBucket extends SvelteComponentTyped<GiPaintBucketProps, GiPaintBucketEvents, GiPaintBucketSlots> {
}
export {};
