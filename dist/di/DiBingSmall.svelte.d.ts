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
export type DiBingSmallProps = typeof __propDef.props;
export type DiBingSmallEvents = typeof __propDef.events;
export type DiBingSmallSlots = typeof __propDef.slots;
export default class DiBingSmall extends SvelteComponentTyped<DiBingSmallProps, DiBingSmallEvents, DiBingSmallSlots> {
}
export {};
