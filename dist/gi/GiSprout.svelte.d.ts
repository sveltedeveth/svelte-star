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
export type GiSproutProps = typeof __propDef.props;
export type GiSproutEvents = typeof __propDef.events;
export type GiSproutSlots = typeof __propDef.slots;
export default class GiSprout extends SvelteComponentTyped<GiSproutProps, GiSproutEvents, GiSproutSlots> {
}
export {};
