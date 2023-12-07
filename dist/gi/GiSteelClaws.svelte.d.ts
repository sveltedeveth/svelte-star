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
export type GiSteelClawsProps = typeof __propDef.props;
export type GiSteelClawsEvents = typeof __propDef.events;
export type GiSteelClawsSlots = typeof __propDef.slots;
export default class GiSteelClaws extends SvelteComponentTyped<GiSteelClawsProps, GiSteelClawsEvents, GiSteelClawsSlots> {
}
export {};
