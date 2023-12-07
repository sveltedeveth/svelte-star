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
export type DiHtml5ConnectivityProps = typeof __propDef.props;
export type DiHtml5ConnectivityEvents = typeof __propDef.events;
export type DiHtml5ConnectivitySlots = typeof __propDef.slots;
export default class DiHtml5Connectivity extends SvelteComponentTyped<DiHtml5ConnectivityProps, DiHtml5ConnectivityEvents, DiHtml5ConnectivitySlots> {
}
export {};
