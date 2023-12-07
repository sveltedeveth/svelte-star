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
export type MdSmokeFreeProps = typeof __propDef.props;
export type MdSmokeFreeEvents = typeof __propDef.events;
export type MdSmokeFreeSlots = typeof __propDef.slots;
export default class MdSmokeFree extends SvelteComponentTyped<MdSmokeFreeProps, MdSmokeFreeEvents, MdSmokeFreeSlots> {
}
export {};
