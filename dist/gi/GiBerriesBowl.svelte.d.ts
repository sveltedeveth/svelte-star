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
export type GiBerriesBowlProps = typeof __propDef.props;
export type GiBerriesBowlEvents = typeof __propDef.events;
export type GiBerriesBowlSlots = typeof __propDef.slots;
export default class GiBerriesBowl extends SvelteComponentTyped<GiBerriesBowlProps, GiBerriesBowlEvents, GiBerriesBowlSlots> {
}
export {};
