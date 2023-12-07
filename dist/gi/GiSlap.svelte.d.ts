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
export type GiSlapProps = typeof __propDef.props;
export type GiSlapEvents = typeof __propDef.events;
export type GiSlapSlots = typeof __propDef.slots;
export default class GiSlap extends SvelteComponentTyped<GiSlapProps, GiSlapEvents, GiSlapSlots> {
}
export {};
