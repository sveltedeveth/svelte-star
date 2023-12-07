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
export type GiDropWeaponProps = typeof __propDef.props;
export type GiDropWeaponEvents = typeof __propDef.events;
export type GiDropWeaponSlots = typeof __propDef.slots;
export default class GiDropWeapon extends SvelteComponentTyped<GiDropWeaponProps, GiDropWeaponEvents, GiDropWeaponSlots> {
}
export {};
