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
export type WiNightFogProps = typeof __propDef.props;
export type WiNightFogEvents = typeof __propDef.events;
export type WiNightFogSlots = typeof __propDef.slots;
export default class WiNightFog extends SvelteComponentTyped<WiNightFogProps, WiNightFogEvents, WiNightFogSlots> {
}
export {};
