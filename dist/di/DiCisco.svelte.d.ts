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
export type DiCiscoProps = typeof __propDef.props;
export type DiCiscoEvents = typeof __propDef.events;
export type DiCiscoSlots = typeof __propDef.slots;
export default class DiCisco extends SvelteComponentTyped<DiCiscoProps, DiCiscoEvents, DiCiscoSlots> {
}
export {};
