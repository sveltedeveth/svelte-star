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
export type GiNinjaArmorProps = typeof __propDef.props;
export type GiNinjaArmorEvents = typeof __propDef.events;
export type GiNinjaArmorSlots = typeof __propDef.slots;
export default class GiNinjaArmor extends SvelteComponentTyped<GiNinjaArmorProps, GiNinjaArmorEvents, GiNinjaArmorSlots> {
}
export {};
