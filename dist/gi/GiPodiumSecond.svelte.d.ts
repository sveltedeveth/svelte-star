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
export type GiPodiumSecondProps = typeof __propDef.props;
export type GiPodiumSecondEvents = typeof __propDef.events;
export type GiPodiumSecondSlots = typeof __propDef.slots;
export default class GiPodiumSecond extends SvelteComponentTyped<GiPodiumSecondProps, GiPodiumSecondEvents, GiPodiumSecondSlots> {
}
export {};
