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
export type GiLevelTwoAdvancedProps = typeof __propDef.props;
export type GiLevelTwoAdvancedEvents = typeof __propDef.events;
export type GiLevelTwoAdvancedSlots = typeof __propDef.slots;
export default class GiLevelTwoAdvanced extends SvelteComponentTyped<GiLevelTwoAdvancedProps, GiLevelTwoAdvancedEvents, GiLevelTwoAdvancedSlots> {
}
export {};
