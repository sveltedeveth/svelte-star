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
export type GiUbisoftSunProps = typeof __propDef.props;
export type GiUbisoftSunEvents = typeof __propDef.events;
export type GiUbisoftSunSlots = typeof __propDef.slots;
export default class GiUbisoftSun extends SvelteComponentTyped<GiUbisoftSunProps, GiUbisoftSunEvents, GiUbisoftSunSlots> {
}
export {};
