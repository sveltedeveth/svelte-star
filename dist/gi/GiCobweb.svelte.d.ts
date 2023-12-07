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
export type GiCobwebProps = typeof __propDef.props;
export type GiCobwebEvents = typeof __propDef.events;
export type GiCobwebSlots = typeof __propDef.slots;
export default class GiCobweb extends SvelteComponentTyped<GiCobwebProps, GiCobwebEvents, GiCobwebSlots> {
}
export {};
