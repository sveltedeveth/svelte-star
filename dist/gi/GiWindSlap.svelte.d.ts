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
export type GiWindSlapProps = typeof __propDef.props;
export type GiWindSlapEvents = typeof __propDef.events;
export type GiWindSlapSlots = typeof __propDef.slots;
export default class GiWindSlap extends SvelteComponentTyped<GiWindSlapProps, GiWindSlapEvents, GiWindSlapSlots> {
}
export {};
