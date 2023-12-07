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
export type GiPulleyHookProps = typeof __propDef.props;
export type GiPulleyHookEvents = typeof __propDef.events;
export type GiPulleyHookSlots = typeof __propDef.slots;
export default class GiPulleyHook extends SvelteComponentTyped<GiPulleyHookProps, GiPulleyHookEvents, GiPulleyHookSlots> {
}
export {};
