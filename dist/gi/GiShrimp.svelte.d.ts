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
export type GiShrimpProps = typeof __propDef.props;
export type GiShrimpEvents = typeof __propDef.events;
export type GiShrimpSlots = typeof __propDef.slots;
export default class GiShrimp extends SvelteComponentTyped<GiShrimpProps, GiShrimpEvents, GiShrimpSlots> {
}
export {};
