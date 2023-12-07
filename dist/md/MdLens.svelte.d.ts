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
export type MdLensProps = typeof __propDef.props;
export type MdLensEvents = typeof __propDef.events;
export type MdLensSlots = typeof __propDef.slots;
export default class MdLens extends SvelteComponentTyped<MdLensProps, MdLensEvents, MdLensSlots> {
}
export {};
