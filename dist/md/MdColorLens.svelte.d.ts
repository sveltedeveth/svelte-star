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
export type MdColorLensProps = typeof __propDef.props;
export type MdColorLensEvents = typeof __propDef.events;
export type MdColorLensSlots = typeof __propDef.slots;
export default class MdColorLens extends SvelteComponentTyped<MdColorLensProps, MdColorLensEvents, MdColorLensSlots> {
}
export {};
