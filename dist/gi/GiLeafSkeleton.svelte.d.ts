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
export type GiLeafSkeletonProps = typeof __propDef.props;
export type GiLeafSkeletonEvents = typeof __propDef.events;
export type GiLeafSkeletonSlots = typeof __propDef.slots;
export default class GiLeafSkeleton extends SvelteComponentTyped<GiLeafSkeletonProps, GiLeafSkeletonEvents, GiLeafSkeletonSlots> {
}
export {};
