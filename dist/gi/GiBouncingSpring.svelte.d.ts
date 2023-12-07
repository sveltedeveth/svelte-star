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
export type GiBouncingSpringProps = typeof __propDef.props;
export type GiBouncingSpringEvents = typeof __propDef.events;
export type GiBouncingSpringSlots = typeof __propDef.slots;
export default class GiBouncingSpring extends SvelteComponentTyped<GiBouncingSpringProps, GiBouncingSpringEvents, GiBouncingSpringSlots> {
}
export {};
