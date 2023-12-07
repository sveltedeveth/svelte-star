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
export type GiDolphinProps = typeof __propDef.props;
export type GiDolphinEvents = typeof __propDef.events;
export type GiDolphinSlots = typeof __propDef.slots;
export default class GiDolphin extends SvelteComponentTyped<GiDolphinProps, GiDolphinEvents, GiDolphinSlots> {
}
export {};
