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
export type DiJavascriptProps = typeof __propDef.props;
export type DiJavascriptEvents = typeof __propDef.events;
export type DiJavascriptSlots = typeof __propDef.slots;
export default class DiJavascript extends SvelteComponentTyped<DiJavascriptProps, DiJavascriptEvents, DiJavascriptSlots> {
}
export {};
