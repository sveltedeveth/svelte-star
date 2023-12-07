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
export type DiWebplatformProps = typeof __propDef.props;
export type DiWebplatformEvents = typeof __propDef.events;
export type DiWebplatformSlots = typeof __propDef.slots;
export default class DiWebplatform extends SvelteComponentTyped<DiWebplatformProps, DiWebplatformEvents, DiWebplatformSlots> {
}
export {};
