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
export type GiSunProps = typeof __propDef.props;
export type GiSunEvents = typeof __propDef.events;
export type GiSunSlots = typeof __propDef.slots;
export default class GiSun extends SvelteComponentTyped<GiSunProps, GiSunEvents, GiSunSlots> {
}
export {};
