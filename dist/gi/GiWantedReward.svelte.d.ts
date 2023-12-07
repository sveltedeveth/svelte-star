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
export type GiWantedRewardProps = typeof __propDef.props;
export type GiWantedRewardEvents = typeof __propDef.events;
export type GiWantedRewardSlots = typeof __propDef.slots;
export default class GiWantedReward extends SvelteComponentTyped<GiWantedRewardProps, GiWantedRewardEvents, GiWantedRewardSlots> {
}
export {};
