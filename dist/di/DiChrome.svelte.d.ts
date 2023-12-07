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
export type DiChromeProps = typeof __propDef.props;
export type DiChromeEvents = typeof __propDef.events;
export type DiChromeSlots = typeof __propDef.slots;
export default class DiChrome extends SvelteComponentTyped<DiChromeProps, DiChromeEvents, DiChromeSlots> {
}
export {};
