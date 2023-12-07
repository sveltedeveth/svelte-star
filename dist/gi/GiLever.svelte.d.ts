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
export type GiLeverProps = typeof __propDef.props;
export type GiLeverEvents = typeof __propDef.events;
export type GiLeverSlots = typeof __propDef.slots;
export default class GiLever extends SvelteComponentTyped<GiLeverProps, GiLeverEvents, GiLeverSlots> {
}
export {};
