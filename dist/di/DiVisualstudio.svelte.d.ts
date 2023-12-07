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
export type DiVisualstudioProps = typeof __propDef.props;
export type DiVisualstudioEvents = typeof __propDef.events;
export type DiVisualstudioSlots = typeof __propDef.slots;
export default class DiVisualstudio extends SvelteComponentTyped<DiVisualstudioProps, DiVisualstudioEvents, DiVisualstudioSlots> {
}
export {};
