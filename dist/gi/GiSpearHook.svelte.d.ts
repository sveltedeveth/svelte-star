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
export type GiSpearHookProps = typeof __propDef.props;
export type GiSpearHookEvents = typeof __propDef.events;
export type GiSpearHookSlots = typeof __propDef.slots;
export default class GiSpearHook extends SvelteComponentTyped<GiSpearHookProps, GiSpearHookEvents, GiSpearHookSlots> {
}
export {};
