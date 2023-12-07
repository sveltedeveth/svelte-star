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
export type DiLinuxProps = typeof __propDef.props;
export type DiLinuxEvents = typeof __propDef.events;
export type DiLinuxSlots = typeof __propDef.slots;
export default class DiLinux extends SvelteComponentTyped<DiLinuxProps, DiLinuxEvents, DiLinuxSlots> {
}
export {};
