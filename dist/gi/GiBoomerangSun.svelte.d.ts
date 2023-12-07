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
export type GiBoomerangSunProps = typeof __propDef.props;
export type GiBoomerangSunEvents = typeof __propDef.events;
export type GiBoomerangSunSlots = typeof __propDef.slots;
export default class GiBoomerangSun extends SvelteComponentTyped<GiBoomerangSunProps, GiBoomerangSunEvents, GiBoomerangSunSlots> {
}
export {};
