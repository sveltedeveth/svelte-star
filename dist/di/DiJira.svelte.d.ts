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
export type DiJiraProps = typeof __propDef.props;
export type DiJiraEvents = typeof __propDef.events;
export type DiJiraSlots = typeof __propDef.slots;
export default class DiJira extends SvelteComponentTyped<DiJiraProps, DiJiraEvents, DiJiraSlots> {
}
export {};
