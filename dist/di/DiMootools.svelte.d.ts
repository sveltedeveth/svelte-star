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
export type DiMootoolsProps = typeof __propDef.props;
export type DiMootoolsEvents = typeof __propDef.events;
export type DiMootoolsSlots = typeof __propDef.slots;
export default class DiMootools extends SvelteComponentTyped<DiMootoolsProps, DiMootoolsEvents, DiMootoolsSlots> {
}
export {};
