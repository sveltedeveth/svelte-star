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
export type DiRequirejsProps = typeof __propDef.props;
export type DiRequirejsEvents = typeof __propDef.events;
export type DiRequirejsSlots = typeof __propDef.slots;
export default class DiRequirejs extends SvelteComponentTyped<DiRequirejsProps, DiRequirejsEvents, DiRequirejsSlots> {
}
export {};
