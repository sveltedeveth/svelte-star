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
export type GiZatGunProps = typeof __propDef.props;
export type GiZatGunEvents = typeof __propDef.events;
export type GiZatGunSlots = typeof __propDef.slots;
export default class GiZatGun extends SvelteComponentTyped<GiZatGunProps, GiZatGunEvents, GiZatGunSlots> {
}
export {};
