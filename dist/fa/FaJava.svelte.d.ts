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
export type FaJavaProps = typeof __propDef.props;
export type FaJavaEvents = typeof __propDef.events;
export type FaJavaSlots = typeof __propDef.slots;
export default class FaJava extends SvelteComponentTyped<FaJavaProps, FaJavaEvents, FaJavaSlots> {
}
export {};
