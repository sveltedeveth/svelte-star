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
export type DiIonicProps = typeof __propDef.props;
export type DiIonicEvents = typeof __propDef.events;
export type DiIonicSlots = typeof __propDef.slots;
export default class DiIonic extends SvelteComponentTyped<DiIonicProps, DiIonicEvents, DiIonicSlots> {
}
export {};
