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
export type GiBeltArmorProps = typeof __propDef.props;
export type GiBeltArmorEvents = typeof __propDef.events;
export type GiBeltArmorSlots = typeof __propDef.slots;
export default class GiBeltArmor extends SvelteComponentTyped<GiBeltArmorProps, GiBeltArmorEvents, GiBeltArmorSlots> {
}
export {};
