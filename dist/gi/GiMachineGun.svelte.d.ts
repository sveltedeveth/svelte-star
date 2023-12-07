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
export type GiMachineGunProps = typeof __propDef.props;
export type GiMachineGunEvents = typeof __propDef.events;
export type GiMachineGunSlots = typeof __propDef.slots;
export default class GiMachineGun extends SvelteComponentTyped<GiMachineGunProps, GiMachineGunEvents, GiMachineGunSlots> {
}
export {};
