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
export type GiLegArmorProps = typeof __propDef.props;
export type GiLegArmorEvents = typeof __propDef.events;
export type GiLegArmorSlots = typeof __propDef.slots;
export default class GiLegArmor extends SvelteComponentTyped<GiLegArmorProps, GiLegArmorEvents, GiLegArmorSlots> {
}
export {};
