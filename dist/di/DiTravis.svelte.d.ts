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
export type DiTravisProps = typeof __propDef.props;
export type DiTravisEvents = typeof __propDef.events;
export type DiTravisSlots = typeof __propDef.slots;
export default class DiTravis extends SvelteComponentTyped<DiTravisProps, DiTravisEvents, DiTravisSlots> {
}
export {};
