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
export type GiGrappleProps = typeof __propDef.props;
export type GiGrappleEvents = typeof __propDef.events;
export type GiGrappleSlots = typeof __propDef.slots;
export default class GiGrapple extends SvelteComponentTyped<GiGrappleProps, GiGrappleEvents, GiGrappleSlots> {
}
export {};
