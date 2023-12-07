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
export type MdCopyrightProps = typeof __propDef.props;
export type MdCopyrightEvents = typeof __propDef.events;
export type MdCopyrightSlots = typeof __propDef.slots;
export default class MdCopyright extends SvelteComponentTyped<MdCopyrightProps, MdCopyrightEvents, MdCopyrightSlots> {
}
export {};
