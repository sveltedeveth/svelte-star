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
export type GiPodiumThirdProps = typeof __propDef.props;
export type GiPodiumThirdEvents = typeof __propDef.events;
export type GiPodiumThirdSlots = typeof __propDef.slots;
export default class GiPodiumThird extends SvelteComponentTyped<GiPodiumThirdProps, GiPodiumThirdEvents, GiPodiumThirdSlots> {
}
export {};
