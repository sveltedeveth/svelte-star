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
export type GiLaserGunProps = typeof __propDef.props;
export type GiLaserGunEvents = typeof __propDef.events;
export type GiLaserGunSlots = typeof __propDef.slots;
export default class GiLaserGun extends SvelteComponentTyped<GiLaserGunProps, GiLaserGunEvents, GiLaserGunSlots> {
}
export {};
