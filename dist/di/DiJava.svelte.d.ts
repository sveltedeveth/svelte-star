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
export type DiJavaProps = typeof __propDef.props;
export type DiJavaEvents = typeof __propDef.events;
export type DiJavaSlots = typeof __propDef.slots;
export default class DiJava extends SvelteComponentTyped<DiJavaProps, DiJavaEvents, DiJavaSlots> {
}
export {};
