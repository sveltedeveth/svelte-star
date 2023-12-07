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
export type GiShoulderArmorProps = typeof __propDef.props;
export type GiShoulderArmorEvents = typeof __propDef.events;
export type GiShoulderArmorSlots = typeof __propDef.slots;
export default class GiShoulderArmor extends SvelteComponentTyped<GiShoulderArmorProps, GiShoulderArmorEvents, GiShoulderArmorSlots> {
}
export {};
