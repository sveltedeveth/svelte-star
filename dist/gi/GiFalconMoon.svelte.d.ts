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
export type GiFalconMoonProps = typeof __propDef.props;
export type GiFalconMoonEvents = typeof __propDef.events;
export type GiFalconMoonSlots = typeof __propDef.slots;
export default class GiFalconMoon extends SvelteComponentTyped<GiFalconMoonProps, GiFalconMoonEvents, GiFalconMoonSlots> {
}
export {};
