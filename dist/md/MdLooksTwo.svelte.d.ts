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
export type MdLooksTwoProps = typeof __propDef.props;
export type MdLooksTwoEvents = typeof __propDef.events;
export type MdLooksTwoSlots = typeof __propDef.slots;
export default class MdLooksTwo extends SvelteComponentTyped<MdLooksTwoProps, MdLooksTwoEvents, MdLooksTwoSlots> {
}
export {};
