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
export type GiSentryGunProps = typeof __propDef.props;
export type GiSentryGunEvents = typeof __propDef.events;
export type GiSentryGunSlots = typeof __propDef.slots;
export default class GiSentryGun extends SvelteComponentTyped<GiSentryGunProps, GiSentryGunEvents, GiSentryGunSlots> {
}
export {};
