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
export type GiFishingPoleProps = typeof __propDef.props;
export type GiFishingPoleEvents = typeof __propDef.events;
export type GiFishingPoleSlots = typeof __propDef.slots;
export default class GiFishingPole extends SvelteComponentTyped<GiFishingPoleProps, GiFishingPoleEvents, GiFishingPoleSlots> {
}
export {};
