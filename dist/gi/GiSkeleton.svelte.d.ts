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
export type GiSkeletonProps = typeof __propDef.props;
export type GiSkeletonEvents = typeof __propDef.events;
export type GiSkeletonSlots = typeof __propDef.slots;
export default class GiSkeleton extends SvelteComponentTyped<GiSkeletonProps, GiSkeletonEvents, GiSkeletonSlots> {
}
export {};
