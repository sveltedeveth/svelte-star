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
export type GiForwardSunProps = typeof __propDef.props;
export type GiForwardSunEvents = typeof __propDef.events;
export type GiForwardSunSlots = typeof __propDef.slots;
export default class GiForwardSun extends SvelteComponentTyped<GiForwardSunProps, GiForwardSunEvents, GiForwardSunSlots> {
}
export {};
