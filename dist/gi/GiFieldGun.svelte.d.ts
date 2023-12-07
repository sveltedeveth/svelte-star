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
export type GiFieldGunProps = typeof __propDef.props;
export type GiFieldGunEvents = typeof __propDef.events;
export type GiFieldGunSlots = typeof __propDef.slots;
export default class GiFieldGun extends SvelteComponentTyped<GiFieldGunProps, GiFieldGunEvents, GiFieldGunSlots> {
}
export {};
