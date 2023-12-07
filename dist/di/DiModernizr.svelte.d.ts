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
export type DiModernizrProps = typeof __propDef.props;
export type DiModernizrEvents = typeof __propDef.events;
export type DiModernizrSlots = typeof __propDef.slots;
export default class DiModernizr extends SvelteComponentTyped<DiModernizrProps, DiModernizrEvents, DiModernizrSlots> {
}
export {};
