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
export type GiUsaFlagProps = typeof __propDef.props;
export type GiUsaFlagEvents = typeof __propDef.events;
export type GiUsaFlagSlots = typeof __propDef.slots;
export default class GiUsaFlag extends SvelteComponentTyped<GiUsaFlagProps, GiUsaFlagEvents, GiUsaFlagSlots> {
}
export {};
