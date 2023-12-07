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
export type GiLeatherArmorProps = typeof __propDef.props;
export type GiLeatherArmorEvents = typeof __propDef.events;
export type GiLeatherArmorSlots = typeof __propDef.slots;
export default class GiLeatherArmor extends SvelteComponentTyped<GiLeatherArmorProps, GiLeatherArmorEvents, GiLeatherArmorSlots> {
}
export {};
