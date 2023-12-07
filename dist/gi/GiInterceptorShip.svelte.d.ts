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
export type GiInterceptorShipProps = typeof __propDef.props;
export type GiInterceptorShipEvents = typeof __propDef.events;
export type GiInterceptorShipSlots = typeof __propDef.slots;
export default class GiInterceptorShip extends SvelteComponentTyped<GiInterceptorShipProps, GiInterceptorShipEvents, GiInterceptorShipSlots> {
}
export {};
