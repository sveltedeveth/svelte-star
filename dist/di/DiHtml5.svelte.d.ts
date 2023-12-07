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
export type DiHtml5Props = typeof __propDef.props;
export type DiHtml5Events = typeof __propDef.events;
export type DiHtml5Slots = typeof __propDef.slots;
export default class DiHtml5 extends SvelteComponentTyped<DiHtml5Props, DiHtml5Events, DiHtml5Slots> {
}
export {};
