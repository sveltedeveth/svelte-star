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
export type FaLinuxProps = typeof __propDef.props;
export type FaLinuxEvents = typeof __propDef.events;
export type FaLinuxSlots = typeof __propDef.slots;
export default class FaLinux extends SvelteComponentTyped<FaLinuxProps, FaLinuxEvents, FaLinuxSlots> {
}
export {};
