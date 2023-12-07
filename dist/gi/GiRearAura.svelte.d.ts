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
export type GiRearAuraProps = typeof __propDef.props;
export type GiRearAuraEvents = typeof __propDef.events;
export type GiRearAuraSlots = typeof __propDef.slots;
export default class GiRearAura extends SvelteComponentTyped<GiRearAuraProps, GiRearAuraEvents, GiRearAuraSlots> {
}
export {};
