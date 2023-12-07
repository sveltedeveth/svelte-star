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
export type DiYiiProps = typeof __propDef.props;
export type DiYiiEvents = typeof __propDef.events;
export type DiYiiSlots = typeof __propDef.slots;
export default class DiYii extends SvelteComponentTyped<DiYiiProps, DiYiiEvents, DiYiiSlots> {
}
export {};
