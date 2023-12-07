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
export type FaUbuntuProps = typeof __propDef.props;
export type FaUbuntuEvents = typeof __propDef.events;
export type FaUbuntuSlots = typeof __propDef.slots;
export default class FaUbuntu extends SvelteComponentTyped<FaUbuntuProps, FaUbuntuEvents, FaUbuntuSlots> {
}
export {};
