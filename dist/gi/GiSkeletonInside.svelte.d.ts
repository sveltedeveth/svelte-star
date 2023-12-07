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
export type GiSkeletonInsideProps = typeof __propDef.props;
export type GiSkeletonInsideEvents = typeof __propDef.events;
export type GiSkeletonInsideSlots = typeof __propDef.slots;
export default class GiSkeletonInside extends SvelteComponentTyped<GiSkeletonInsideProps, GiSkeletonInsideEvents, GiSkeletonInsideSlots> {
}
export {};
