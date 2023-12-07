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
export type GiVortexProps = typeof __propDef.props;
export type GiVortexEvents = typeof __propDef.events;
export type GiVortexSlots = typeof __propDef.slots;
export default class GiVortex extends SvelteComponentTyped<GiVortexProps, GiVortexEvents, GiVortexSlots> {
}
export {};
