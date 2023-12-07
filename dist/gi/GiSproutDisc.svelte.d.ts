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
export type GiSproutDiscProps = typeof __propDef.props;
export type GiSproutDiscEvents = typeof __propDef.events;
export type GiSproutDiscSlots = typeof __propDef.slots;
export default class GiSproutDisc extends SvelteComponentTyped<GiSproutDiscProps, GiSproutDiscEvents, GiSproutDiscSlots> {
}
export {};
