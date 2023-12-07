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
export type DiComposerProps = typeof __propDef.props;
export type DiComposerEvents = typeof __propDef.events;
export type DiComposerSlots = typeof __propDef.slots;
export default class DiComposer extends SvelteComponentTyped<DiComposerProps, DiComposerEvents, DiComposerSlots> {
}
export {};
