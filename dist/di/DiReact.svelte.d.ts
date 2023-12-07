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
export type DiReactProps = typeof __propDef.props;
export type DiReactEvents = typeof __propDef.events;
export type DiReactSlots = typeof __propDef.slots;
export default class DiReact extends SvelteComponentTyped<DiReactProps, DiReactEvents, DiReactSlots> {
}
export {};
