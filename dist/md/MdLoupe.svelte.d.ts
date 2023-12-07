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
export type MdLoupeProps = typeof __propDef.props;
export type MdLoupeEvents = typeof __propDef.events;
export type MdLoupeSlots = typeof __propDef.slots;
export default class MdLoupe extends SvelteComponentTyped<MdLoupeProps, MdLoupeEvents, MdLoupeSlots> {
}
export {};
