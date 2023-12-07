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
export type GiSpikedArmorProps = typeof __propDef.props;
export type GiSpikedArmorEvents = typeof __propDef.events;
export type GiSpikedArmorSlots = typeof __propDef.slots;
export default class GiSpikedArmor extends SvelteComponentTyped<GiSpikedArmorProps, GiSpikedArmorEvents, GiSpikedArmorSlots> {
}
export {};
