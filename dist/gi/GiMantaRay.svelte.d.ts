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
export type GiMantaRayProps = typeof __propDef.props;
export type GiMantaRayEvents = typeof __propDef.events;
export type GiMantaRaySlots = typeof __propDef.slots;
export default class GiMantaRay extends SvelteComponentTyped<GiMantaRayProps, GiMantaRayEvents, GiMantaRaySlots> {
}
export {};
