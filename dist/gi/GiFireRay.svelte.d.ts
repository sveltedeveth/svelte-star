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
export type GiFireRayProps = typeof __propDef.props;
export type GiFireRayEvents = typeof __propDef.events;
export type GiFireRaySlots = typeof __propDef.slots;
export default class GiFireRay extends SvelteComponentTyped<GiFireRayProps, GiFireRayEvents, GiFireRaySlots> {
}
export {};
