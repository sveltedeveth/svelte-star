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
export type GiScorpionProps = typeof __propDef.props;
export type GiScorpionEvents = typeof __propDef.events;
export type GiScorpionSlots = typeof __propDef.slots;
export default class GiScorpion extends SvelteComponentTyped<GiScorpionProps, GiScorpionEvents, GiScorpionSlots> {
}
export {};
