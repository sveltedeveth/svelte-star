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
export type FaXRayProps = typeof __propDef.props;
export type FaXRayEvents = typeof __propDef.events;
export type FaXRaySlots = typeof __propDef.slots;
export default class FaXRay extends SvelteComponentTyped<FaXRayProps, FaXRayEvents, FaXRaySlots> {
}
export {};
