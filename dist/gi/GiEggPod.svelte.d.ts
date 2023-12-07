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
export type GiEggPodProps = typeof __propDef.props;
export type GiEggPodEvents = typeof __propDef.events;
export type GiEggPodSlots = typeof __propDef.slots;
export default class GiEggPod extends SvelteComponentTyped<GiEggPodProps, GiEggPodEvents, GiEggPodSlots> {
}
export {};
