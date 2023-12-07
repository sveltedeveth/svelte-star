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
export type GiBolterGunProps = typeof __propDef.props;
export type GiBolterGunEvents = typeof __propDef.events;
export type GiBolterGunSlots = typeof __propDef.slots;
export default class GiBolterGun extends SvelteComponentTyped<GiBolterGunProps, GiBolterGunEvents, GiBolterGunSlots> {
}
export {};
