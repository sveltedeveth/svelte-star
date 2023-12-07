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
export type GiSpringProps = typeof __propDef.props;
export type GiSpringEvents = typeof __propDef.events;
export type GiSpringSlots = typeof __propDef.slots;
export default class GiSpring extends SvelteComponentTyped<GiSpringProps, GiSpringEvents, GiSpringSlots> {
}
export {};
