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
export type GiCheckeredFlagProps = typeof __propDef.props;
export type GiCheckeredFlagEvents = typeof __propDef.events;
export type GiCheckeredFlagSlots = typeof __propDef.slots;
export default class GiCheckeredFlag extends SvelteComponentTyped<GiCheckeredFlagProps, GiCheckeredFlagEvents, GiCheckeredFlagSlots> {
}
export {};
