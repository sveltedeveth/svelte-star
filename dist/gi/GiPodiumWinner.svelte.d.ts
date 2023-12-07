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
export type GiPodiumWinnerProps = typeof __propDef.props;
export type GiPodiumWinnerEvents = typeof __propDef.events;
export type GiPodiumWinnerSlots = typeof __propDef.slots;
export default class GiPodiumWinner extends SvelteComponentTyped<GiPodiumWinnerProps, GiPodiumWinnerEvents, GiPodiumWinnerSlots> {
}
export {};
