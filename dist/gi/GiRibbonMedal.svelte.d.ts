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
export type GiRibbonMedalProps = typeof __propDef.props;
export type GiRibbonMedalEvents = typeof __propDef.events;
export type GiRibbonMedalSlots = typeof __propDef.slots;
export default class GiRibbonMedal extends SvelteComponentTyped<GiRibbonMedalProps, GiRibbonMedalEvents, GiRibbonMedalSlots> {
}
export {};
