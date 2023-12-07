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
export type DiUnitySmallProps = typeof __propDef.props;
export type DiUnitySmallEvents = typeof __propDef.events;
export type DiUnitySmallSlots = typeof __propDef.slots;
export default class DiUnitySmall extends SvelteComponentTyped<DiUnitySmallProps, DiUnitySmallEvents, DiUnitySmallSlots> {
}
export {};
