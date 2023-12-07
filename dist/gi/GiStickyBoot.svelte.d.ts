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
export type GiStickyBootProps = typeof __propDef.props;
export type GiStickyBootEvents = typeof __propDef.events;
export type GiStickyBootSlots = typeof __propDef.slots;
export default class GiStickyBoot extends SvelteComponentTyped<GiStickyBootProps, GiStickyBootEvents, GiStickyBootSlots> {
}
export {};
