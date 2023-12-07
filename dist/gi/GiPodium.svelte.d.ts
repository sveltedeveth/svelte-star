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
export type GiPodiumProps = typeof __propDef.props;
export type GiPodiumEvents = typeof __propDef.events;
export type GiPodiumSlots = typeof __propDef.slots;
export default class GiPodium extends SvelteComponentTyped<GiPodiumProps, GiPodiumEvents, GiPodiumSlots> {
}
export {};
