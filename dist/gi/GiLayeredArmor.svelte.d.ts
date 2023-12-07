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
export type GiLayeredArmorProps = typeof __propDef.props;
export type GiLayeredArmorEvents = typeof __propDef.events;
export type GiLayeredArmorSlots = typeof __propDef.slots;
export default class GiLayeredArmor extends SvelteComponentTyped<GiLayeredArmorProps, GiLayeredArmorEvents, GiLayeredArmorSlots> {
}
export {};
