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
export type DiIllustratorProps = typeof __propDef.props;
export type DiIllustratorEvents = typeof __propDef.events;
export type DiIllustratorSlots = typeof __propDef.slots;
export default class DiIllustrator extends SvelteComponentTyped<DiIllustratorProps, DiIllustratorEvents, DiIllustratorSlots> {
}
export {};
