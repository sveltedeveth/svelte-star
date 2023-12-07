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
export type FaDotCircleProps = typeof __propDef.props;
export type FaDotCircleEvents = typeof __propDef.events;
export type FaDotCircleSlots = typeof __propDef.slots;
export default class FaDotCircle extends SvelteComponentTyped<FaDotCircleProps, FaDotCircleEvents, FaDotCircleSlots> {
}
export {};
