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
export type GiLightBackpackProps = typeof __propDef.props;
export type GiLightBackpackEvents = typeof __propDef.events;
export type GiLightBackpackSlots = typeof __propDef.slots;
export default class GiLightBackpack extends SvelteComponentTyped<GiLightBackpackProps, GiLightBackpackEvents, GiLightBackpackSlots> {
}
export {};
