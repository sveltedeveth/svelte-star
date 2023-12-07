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
export type GiKneelingProps = typeof __propDef.props;
export type GiKneelingEvents = typeof __propDef.events;
export type GiKneelingSlots = typeof __propDef.slots;
export default class GiKneeling extends SvelteComponentTyped<GiKneelingProps, GiKneelingEvents, GiKneelingSlots> {
}
export {};
