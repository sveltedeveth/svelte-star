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
export type GiMeatHookProps = typeof __propDef.props;
export type GiMeatHookEvents = typeof __propDef.events;
export type GiMeatHookSlots = typeof __propDef.slots;
export default class GiMeatHook extends SvelteComponentTyped<GiMeatHookProps, GiMeatHookEvents, GiMeatHookSlots> {
}
export {};
