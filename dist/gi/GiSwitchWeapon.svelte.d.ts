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
export type GiSwitchWeaponProps = typeof __propDef.props;
export type GiSwitchWeaponEvents = typeof __propDef.events;
export type GiSwitchWeaponSlots = typeof __propDef.slots;
export default class GiSwitchWeapon extends SvelteComponentTyped<GiSwitchWeaponProps, GiSwitchWeaponEvents, GiSwitchWeaponSlots> {
}
export {};
