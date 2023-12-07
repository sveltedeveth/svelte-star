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
export type GiPirateFlagProps = typeof __propDef.props;
export type GiPirateFlagEvents = typeof __propDef.events;
export type GiPirateFlagSlots = typeof __propDef.slots;
export default class GiPirateFlag extends SvelteComponentTyped<GiPirateFlagProps, GiPirateFlagEvents, GiPirateFlagSlots> {
}
export {};
