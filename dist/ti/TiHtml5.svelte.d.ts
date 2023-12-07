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
export type TiHtml5Props = typeof __propDef.props;
export type TiHtml5Events = typeof __propDef.events;
export type TiHtml5Slots = typeof __propDef.slots;
export default class TiHtml5 extends SvelteComponentTyped<TiHtml5Props, TiHtml5Events, TiHtml5Slots> {
}
export {};
