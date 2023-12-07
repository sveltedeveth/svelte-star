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
export type FaJiraProps = typeof __propDef.props;
export type FaJiraEvents = typeof __propDef.events;
export type FaJiraSlots = typeof __propDef.slots;
export default class FaJira extends SvelteComponentTyped<FaJiraProps, FaJiraEvents, FaJiraSlots> {
}
export {};
