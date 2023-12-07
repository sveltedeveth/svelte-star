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
export type GiBlackFlagProps = typeof __propDef.props;
export type GiBlackFlagEvents = typeof __propDef.events;
export type GiBlackFlagSlots = typeof __propDef.slots;
export default class GiBlackFlag extends SvelteComponentTyped<GiBlackFlagProps, GiBlackFlagEvents, GiBlackFlagSlots> {
}
export {};
