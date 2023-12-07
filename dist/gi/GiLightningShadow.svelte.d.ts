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
export type GiLightningShadowProps = typeof __propDef.props;
export type GiLightningShadowEvents = typeof __propDef.events;
export type GiLightningShadowSlots = typeof __propDef.slots;
export default class GiLightningShadow extends SvelteComponentTyped<GiLightningShadowProps, GiLightningShadowEvents, GiLightningShadowSlots> {
}
export {};
