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
export type GiPistolGunProps = typeof __propDef.props;
export type GiPistolGunEvents = typeof __propDef.events;
export type GiPistolGunSlots = typeof __propDef.slots;
export default class GiPistolGun extends SvelteComponentTyped<GiPistolGunProps, GiPistolGunEvents, GiPistolGunSlots> {
}
export {};
