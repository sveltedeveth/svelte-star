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
export type GiSkeletonKeyProps = typeof __propDef.props;
export type GiSkeletonKeyEvents = typeof __propDef.events;
export type GiSkeletonKeySlots = typeof __propDef.slots;
export default class GiSkeletonKey extends SvelteComponentTyped<GiSkeletonKeyProps, GiSkeletonKeyEvents, GiSkeletonKeySlots> {
}
export {};
