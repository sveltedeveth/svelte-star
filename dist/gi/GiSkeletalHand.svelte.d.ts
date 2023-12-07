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
export type GiSkeletalHandProps = typeof __propDef.props;
export type GiSkeletalHandEvents = typeof __propDef.events;
export type GiSkeletalHandSlots = typeof __propDef.slots;
export default class GiSkeletalHand extends SvelteComponentTyped<GiSkeletalHandProps, GiSkeletalHandEvents, GiSkeletalHandSlots> {
}
export {};
