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
export type DiScrumProps = typeof __propDef.props;
export type DiScrumEvents = typeof __propDef.events;
export type DiScrumSlots = typeof __propDef.slots;
export default class DiScrum extends SvelteComponentTyped<DiScrumProps, DiScrumEvents, DiScrumSlots> {
}
export {};
