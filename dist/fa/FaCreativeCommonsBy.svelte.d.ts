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
export type FaCreativeCommonsByProps = typeof __propDef.props;
export type FaCreativeCommonsByEvents = typeof __propDef.events;
export type FaCreativeCommonsBySlots = typeof __propDef.slots;
export default class FaCreativeCommonsBy extends SvelteComponentTyped<FaCreativeCommonsByProps, FaCreativeCommonsByEvents, FaCreativeCommonsBySlots> {
}
export {};
