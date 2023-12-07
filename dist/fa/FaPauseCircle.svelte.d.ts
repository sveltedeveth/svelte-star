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
export type FaPauseCircleProps = typeof __propDef.props;
export type FaPauseCircleEvents = typeof __propDef.events;
export type FaPauseCircleSlots = typeof __propDef.slots;
export default class FaPauseCircle extends SvelteComponentTyped<FaPauseCircleProps, FaPauseCircleEvents, FaPauseCircleSlots> {
}
export {};
