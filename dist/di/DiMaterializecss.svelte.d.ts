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
export type DiMaterializecssProps = typeof __propDef.props;
export type DiMaterializecssEvents = typeof __propDef.events;
export type DiMaterializecssSlots = typeof __propDef.slots;
export default class DiMaterializecss extends SvelteComponentTyped<DiMaterializecssProps, DiMaterializecssEvents, DiMaterializecssSlots> {
}
export {};
