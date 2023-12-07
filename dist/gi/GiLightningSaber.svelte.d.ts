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
export type GiLightningSaberProps = typeof __propDef.props;
export type GiLightningSaberEvents = typeof __propDef.events;
export type GiLightningSaberSlots = typeof __propDef.slots;
export default class GiLightningSaber extends SvelteComponentTyped<GiLightningSaberProps, GiLightningSaberEvents, GiLightningSaberSlots> {
}
export {};
