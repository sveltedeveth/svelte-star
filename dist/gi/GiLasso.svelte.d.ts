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
export type GiLassoProps = typeof __propDef.props;
export type GiLassoEvents = typeof __propDef.events;
export type GiLassoSlots = typeof __propDef.slots;
export default class GiLasso extends SvelteComponentTyped<GiLassoProps, GiLassoEvents, GiLassoSlots> {
}
export {};
