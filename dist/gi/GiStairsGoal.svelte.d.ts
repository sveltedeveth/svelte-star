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
export type GiStairsGoalProps = typeof __propDef.props;
export type GiStairsGoalEvents = typeof __propDef.events;
export type GiStairsGoalSlots = typeof __propDef.slots;
export default class GiStairsGoal extends SvelteComponentTyped<GiStairsGoalProps, GiStairsGoalEvents, GiStairsGoalSlots> {
}
export {};
