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
export type GiPirateHookProps = typeof __propDef.props;
export type GiPirateHookEvents = typeof __propDef.events;
export type GiPirateHookSlots = typeof __propDef.slots;
export default class GiPirateHook extends SvelteComponentTyped<GiPirateHookProps, GiPirateHookEvents, GiPirateHookSlots> {
}
export {};
