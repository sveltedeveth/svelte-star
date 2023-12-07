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
export type FaHtml5Props = typeof __propDef.props;
export type FaHtml5Events = typeof __propDef.events;
export type FaHtml5Slots = typeof __propDef.slots;
export default class FaHtml5 extends SvelteComponentTyped<FaHtml5Props, FaHtml5Events, FaHtml5Slots> {
}
export {};
