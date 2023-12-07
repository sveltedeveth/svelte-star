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
export type GiRayGunProps = typeof __propDef.props;
export type GiRayGunEvents = typeof __propDef.events;
export type GiRayGunSlots = typeof __propDef.slots;
export default class GiRayGun extends SvelteComponentTyped<GiRayGunProps, GiRayGunEvents, GiRayGunSlots> {
}
export {};
