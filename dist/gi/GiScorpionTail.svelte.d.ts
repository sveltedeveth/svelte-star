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
export type GiScorpionTailProps = typeof __propDef.props;
export type GiScorpionTailEvents = typeof __propDef.events;
export type GiScorpionTailSlots = typeof __propDef.slots;
export default class GiScorpionTail extends SvelteComponentTyped<GiScorpionTailProps, GiScorpionTailEvents, GiScorpionTailSlots> {
}
export {};
