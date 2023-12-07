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
export type DiJekyllSmallProps = typeof __propDef.props;
export type DiJekyllSmallEvents = typeof __propDef.events;
export type DiJekyllSmallSlots = typeof __propDef.slots;
export default class DiJekyllSmall extends SvelteComponentTyped<DiJekyllSmallProps, DiJekyllSmallEvents, DiJekyllSmallSlots> {
}
export {};
