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
export type GiRaiseSkeletonProps = typeof __propDef.props;
export type GiRaiseSkeletonEvents = typeof __propDef.events;
export type GiRaiseSkeletonSlots = typeof __propDef.slots;
export default class GiRaiseSkeleton extends SvelteComponentTyped<GiRaiseSkeletonProps, GiRaiseSkeletonEvents, GiRaiseSkeletonSlots> {
}
export {};
