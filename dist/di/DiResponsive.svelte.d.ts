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
export type DiResponsiveProps = typeof __propDef.props;
export type DiResponsiveEvents = typeof __propDef.events;
export type DiResponsiveSlots = typeof __propDef.slots;
export default class DiResponsive extends SvelteComponentTyped<DiResponsiveProps, DiResponsiveEvents, DiResponsiveSlots> {
}
export {};
