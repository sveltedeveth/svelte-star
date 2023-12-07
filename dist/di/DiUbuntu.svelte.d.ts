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
export type DiUbuntuProps = typeof __propDef.props;
export type DiUbuntuEvents = typeof __propDef.events;
export type DiUbuntuSlots = typeof __propDef.slots;
export default class DiUbuntu extends SvelteComponentTyped<DiUbuntuProps, DiUbuntuEvents, DiUbuntuSlots> {
}
export {};
